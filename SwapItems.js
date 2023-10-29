/***********************************************************************/
/*                                                                     */
/*      SwapItems - Permutation de 2 objs select. sous InDesign        */
/*      (l'operation se fait selon la pos du pt de reference)          */
/*                                                                     */
/*      Version: 1.0 -- Auteur: Marc Autret -- Date: 30/08/06          */
/*      Aide: http://marcautret.free.fr/geek/indd/swap/                */
/*                                                                     */
/*      Utilisation:                                                   */
/*                                                                     */
/*      1) Placer le present fichier dans le sous-dossier              */
/*         Presets/Scripts/ de l'application InDesign                  */
/*                                                                     */
/*      2) Lancer InDesign, ouvrir un document et selectionner         */
/*         deux elements a permuter                                    */
/*                                                                     */
/*      3) Executer le script par Fenetre>Scripts>Scripts              */
/*         suivi d'un double-clic sur Permuter.js                      */
/*         (ou affecter au script un raccourci-clavier via             */
/*         Edition>Raccourcis-clavier>Zone:"scripts")                  */
/*                                                                     */
/*      NB: requiert InDesign CS1 ou +                                 */
/*                                                                     */
/*                  Feedbacks : marcautret@free.fr                     */
/*                                                                     */
/***********************************************************************/


//----------------------------------------------------------
//			FONCTIONS UTILITAIRES
//----------------------------------------------------------


/*void*/	function exitMessage(/*exception*/ ex)
//----------------------------------------------------------
// Affiche msg d'erreur de l'exception transmise et exit
{
alert("Erreur:\n" + ex.toString());
exit();
}


//----------------------------------------------------------
//			METHODES UTILITAIRES
//----------------------------------------------------------


/*arr4*/ Array.prototype.extractCoords = function(/*arr2*/ coordsRef)
//----------------------------------------------------------
// Renvoie le tableau [0=>X, 1=>Y] a partir de this[0=>T, 1=>L, 2=>B, 3=>R]
// en appliquant le code de coordsRef[0] pour X et coordsRef[1] pour Y
// codes : 0 -> L / T ; 1 -> centre / milieu ; 2 -> R / B
// (il appartient a l'appelant de verifier la conformite du tableau this)
{
var coords = new Array(2);
var dB = 0;

for (var i=0 ; i<= 1 ; i++)
	{
	// T=0 -- L=1 -- B=2 -- R=3
	dB = 1 - i;
	if ( coordsRef[i]==1 )
		coords[i] = ( this[dB] + this[dB+2] ) / 2;
	else
		coords[i] = this[coordsRef[i] + dB];
	}
return(coords);
}


/*arr*/ Array.prototype.sym = function()
//----------------------------------------------------------
// Renvoie le tableau symetrique de this
// (cad dont toutes les valeurs sont symetrisees x -> -x)
{
var rSym = new Array();
for (var i=this.length-1 ; i>=0 ; i--)
	{
	rSym.unshift(-this[i]);
	}
return(rSym);
}


/*void*/ LayoutWindow.prototype.permuteSelected = function()
//----------------------------------------------------------
// Permute les 2 objets actuellemt selectionnes
// (l'appelant est responsable de la conformite de la selection)
{
// recupere le point de reference de la permutation
var refPoint = this.transformReferencePoint;
var dRef = new Array(2);
switch(refPoint)
	{
	case AnchorPoint.topLeftAnchor :
		dRef = [0, 0];
		break;
	case AnchorPoint.topCenterAnchor :
		dRef = [1, 0];
		break;
	case AnchorPoint.topRightAnchor :
		dRef = [2, 0];
		break;
	case AnchorPoint.leftCenterAnchor :
		dRef = [0, 1];
		break;
	case AnchorPoint.centerAnchor :
		dRef = [1, 1];
		break;
	case AnchorPoint.rightCenterAnchor :
		dRef = [2, 1];
		break;
	case AnchorPoint.bottomLeftAnchor :
		dRef = [0, 2];
		break;
	case AnchorPoint.bottomCenterAnchor :
		dRef = [1, 2];
		break;
	case AnchorPoint.bottomRightAnchor :
		dRef = [2, 2];
		break;
	}

// recupere les 2 objets selectionnes et leurs coordonnees "utiles"
var obj1 = this.selection[0];
var pos1 = obj1.geometricBounds.extractCoords(dRef);
var obj2 = this.selection[1];
var pos2 = obj2.geometricBounds.extractCoords(dRef);

// calcule le vecteur de translation 1 -> 2
var vect_1_2 = [ pos2[0]-pos1[0], pos2[1]-pos1[1] ];

try	{
	obj1.move(undefined, vect_1_2);
	obj2.move(undefined, vect_1_2.sym());
	}
catch(ex)
	{
	exitMessage(ex);
	}
}


//----------------------------------------------------------
// PROGRAMME PRINCIPAL
//----------------------------------------------------------


if ( app.documents.length > 0 )
	{
	if ( app.activeWindow.selection.length == 2 )
		{
		app.activeWindow.permuteSelected();
		}
	else
		alert("Vous devez selectionner exactement 2 OBJETS!");
	}
else
	alert("Aucun document ouvert!");