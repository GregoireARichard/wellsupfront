class TreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
  
    get isLeaf() {
        return this.children.length === 0;
    }
  
    get hasChildren() {
        return !this.isLeaf;
    }
}

class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value);
    }
  
    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }
  
    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }
  
    insert(parentNodeKey, key, value = key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, node));
                return true;
            }
        }
        return false;
    }
  
    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }
  
    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }

    left(key) {
        if (this.root.hasChildren){
            const leftKey = parseInt(this.find(key).key.toString() + "1")
            return this.find(leftKey)
        }
        else {
            return undefined
        }
    }

    right(key) {
        if (this.root.hasChildren){
            const rightKey = parseInt(this.find(key).key.toString() + "2")
            return this.find(rightKey)
        }
        else {
            return undefined
        }
    }
    easyInsert(path, value) {
        let finalPath = "1"
        const parsedPath = path.split(',')
        for (let direction of parsedPath) {
            if (direction === "oui"){
                finalPath += "2"
            }
            else{
                finalPath += "1"
            }
        }
        const finalPathParent = finalPath.slice(0, -1)
        if (this.find(parseInt(finalPathParent)) === undefined){
            return console.error("Vous devez déjà faire les branches supérieures !\nLe " + (finalPathParent.length) + "ème étage n'existe pas.")
        }
        else
        {
            this.insert(parseInt(finalPathParent), parseInt(finalPath), value)
        }
    }
}
 
const themeAgriculture = new Tree(1, "Est-ce que vous voulez un métier manuel ?")
themeAgriculture.easyInsert('non', "Voulez-vous être ingénieur agronome ?")
themeAgriculture.easyInsert('oui', "Voulez-vous travailler avec des animaux ?")
themeAgriculture.easyInsert('non,non', "Voulez-vous faire de la comptabilité pour l'agriculture ?")
themeAgriculture.easyInsert('non,oui', ['développement agricole', 'élevage', 'machinisme agricole'])
themeAgriculture.easyInsert('oui,oui', ['animaux', 'soins aux animaux'])
themeAgriculture.easyInsert('oui,non', "Tu préfères peut-être la culture ?")
themeAgriculture.easyInsert('non,non,non', "REDIRECTION")
themeAgriculture.easyInsert('non,non,oui', ['comptabilité'])
themeAgriculture.easyInsert('oui,oui,oui', ['agriculture', 'aquaculture'])
themeAgriculture.easyInsert('oui,oui,non', "REDIRECTION")

const themeArchitecture = new Tree(1, "Est-ce que vous voulez travailler sur les bâtiments ?")
themeArchitecture.easyInsert('non', "Voulez-vous travailler dans l'urbanisme ?")
themeArchitecture.easyInsert('oui', "Voulez-vous travailler das l'architecture ?")
themeArchitecture.easyInsert('non,non', "Voulez-vous travailler dans le paysagisme ?")
themeArchitecture.easyInsert('non,oui', ['urbanisme', 'travaux publics'])
themeArchitecture.easyInsert('oui,non', "Voulez-vous faire de la rénovation ?")
themeArchitecture.easyInsert('oui,oui', ['architecture', 'artisanat', 'construction'])
themeArchitecture.easyInsert('non,non,non', "REDIRECTION")
themeArchitecture.easyInsert('non,non,oui', ['amenagement paysager', 'environnement', 'forêt', 'urbanisme'])
themeArchitecture.easyInsert('oui,non,non', "Voulez-vous faire de l'architecture d'intérieur ?" )
themeArchitecture.easyInsert('oui,non,oui', ['construction', 'charpente', 'bois', 'artisanat', 'architecture'])
themeArchitecture.easyInsert('oui,non,non,non', "L'urbanisme vous intéresse ?")
themeArchitecture.easyInsert('oui,non,non,oui', ['architecture', 'ameublement'])
themeArchitecture.easyInsert('oui,non,non,non,non', "Le paysagisme vous plait ?")
themeArchitecture.easyInsert('oui,non,non,non,oui', ['urbanisme, travaux publics'])
themeArchitecture.easyInsert('oui,non,non,non,non,non', "REDIRECTION")
themeArchitecture.easyInsert('oui,non,non,non,non,oui', ['amenagement paysager', 'environnement', 'forêt', 'urbanisme'])
//console.log([...themeArchitecture.preOrderTraversal()].map(x => x.value));

const themeBanque = new Tree(1, "Est-ce que vous-êtes intéressé par le secteur de la banque et de l'assurance ?")
themeBanque.easyInsert('oui', ['banque', 'assurances'])
themeBanque.easyInsert('non', "REDIRECTION")
//console.log([...themeBanque.preOrderTraversal()].map(x => x.value));

const themeTraduction = new Tree(1, "Travaillez dans les langues vous intéresse ?")
themeTraduction.easyInsert('non', "REDIRECTION")
themeTraduction.easyInsert('oui', ['langues', 'lettres', 'linguistique'])
//console.log([...themeTraduction.preOrderTraversal()].map(x => x.value));

const themeCommunication = new Tree(1, "Les métiers de la communication vous intéressent ?")
themeCommunication.easyInsert('non', "Le journalisme vous intéresse ?")
themeCommunication.easyInsert('oui', "Voulez-vous faire de la communication traditionnelle ?")
themeCommunication.easyInsert('non,non', "REDIRECTION")
themeCommunication.easyInsert('non,oui', ['journalisme', 'information', 'multimédia'])
themeCommunication.easyInsert('oui,non', "Voulez-vous faire de la communication digitale ?" )
themeCommunication.easyInsert('oui,oui', ['communication', 'marketing'])
themeCommunication.easyInsert('oui,non,non', "REDIRECTION")
themeCommunication.easyInsert('oui,non,oui', ['internet', 'communication'])
//console.log([...themeCommunication.preOrderTraversal()].map(x => x.value));

const themeAudiovisuel = new Tree(1, "Est-ce que vous voulez travailler dans l'audio-viusel ?")
themeAudiovisuel.easyInsert('non', "L'édition vous intéresse ?")
themeAudiovisuel.easyInsert('oui', "Vous préférez les métiers de la photographie ?")
themeAudiovisuel.easyInsert('non,non', "REDIRECTION")
themeAudiovisuel.easyInsert('non,oui', "Vous êtes intéressé par le dessin ?")
themeAudiovisuel.easyInsert('oui,non', "Les métiers de journalistes et animateurs vous intéressent ?")
themeAudiovisuel.easyInsert('oui,oui', ['arts graphiques', 'arts'])
themeAudiovisuel.easyInsert('non,oui,non', "Vous aimez le conseil et la vente de livre ?")
themeAudiovisuel.easyInsert('non,oui,oui', ['arts', 'arts appliqués', '  arts graphiques', 'arts plastiques'])
themeAudiovisuel.easyInsert('oui,non,non', "Travrailler dans le montage et la réalisation vous tente ?" )
themeAudiovisuel.easyInsert('oui,non,oui', ['journalisme'])
themeAudiovisuel.easyInsert('non,oui,non,non', "REDIRECTION")
themeAudiovisuel.easyInsert('non,oui,non,oui', ['lettres'])
themeAudiovisuel.easyInsert('oui,non,non,non', "REDIRECTION")
themeAudiovisuel.easyInsert('oui,non,non,oui', ['audiovisuel'])
//console.log([...themeAudiovisuel.preOrderTraversal()].map(x => x.value));

const themeBTP = new Tree(1, "Est-ce que tu aimes conduire des engins ?")
themeBTP.easyInsert('non', "Tu préfères les métiers manuels ?")
themeBTP.easyInsert('oui', ['engins','travaux publics'])
themeBTP.easyInsert('non,non', "Tu aimes diriger des équipes et choisir des projets ?")
themeBTP.easyInsert('non,oui', ['verre', 'travau publics', 'plasturgie','metallurige sidérurgie', 'menuiserie', 'matériaux', 'électricité', 'déchêts', 'couverture', 'charpente', 'plâterie'])
themeBTP.easyInsert('non,non,non', "REDIRECTION")
themeBTP.easyInsert('non,non,oui', ["administration de l'entreprise", "bureau d'étude BPT"])
//console.log([...themeBTP.preOrderTraversal()].map(x => x.value));

const themeDroit = new Tree(1,"Est-ce que vous voulez faire des études de droit ?")
themeDroit.easyInsert('non', "Est-ce que l'éco-gestion vous intéresse ?")
themeDroit.easyInsert('oui', ['droit', 'droit appliqué', 'droit international', 'droit privé', 'droit public', 'droit social'])
themeDroit.easyInsert('non,non', "Vous aimeriez faire une école de commerce ?")
themeDroit.easyInsert('non,oui', ['gestion des entreprises', 'grande distribution et petits commerces', 'informatique de gestion', 'sciences économiques'])
themeDroit.easyInsert('non,non,non', "Voulez-vous faire des études d'expert comptable ?")
themeDroit.easyInsert('non,non,oui', ["commerce", "économie", "commerce de l'art", "commerce international", "communication"])
themeDroit.easyInsert('non,non,non,non', "Les Relations Humaines vous intéressent ?")
themeDroit.easyInsert('non,non,non,oui', ['comptabilité'])
themeDroit.easyInsert('non,non,non,non,non', "REDIRECTION")
themeDroit.easyInsert('non,non,non,non,oui', ['ressources humaines'])
//console.log([...themeDroit.preOrderTraversal()].map(x => x.value));

const ThemeEnseignement = new Tree(1,"Est-ce que vous souhaitez enseigner ?")
ThemeEnseignement.easyInsert('non', "Le métier de CPE vous intéressent ?")
ThemeEnseignement.easyInsert('oui', ['enseignement'])
ThemeEnseignement.easyInsert('non,non', "REDIRECTION")
ThemeEnseignement.easyInsert('non,oui', ['Psychologie'])
//console.log([...ThemeEnseignement.preOrderTraversal()].map(x => x.value));

const themeMedicoSocial = new Tree(1, "Est-ce que vous voulez travailler dans le médical ?")
themeMedicoSocial.easyInsert('non', "La paramédical ?")
themeMedicoSocial.easyInsert('oui', "Est-ce que vous voulez faire des études longues ?")
themeMedicoSocial.easyInsert('oui,non', "Est-ce que vous êtes sur de faire medecine ?")
themeMedicoSocial.easyInsert('non,non', "Le sport ?")
themeMedicoSocial.easyInsert('non,non,non', "Le social ?")
themeMedicoSocial.easyInsert('non,non,oui', ['paramedical'])
themeMedicoSocial.easyInsert('oui,non,non', "Vous hesitez avec une autre matière ?")
themeMedicoSocial.easyInsert('oui,non,oui', ['medical'])
themeMedicoSocial.easyInsert('non,non,oui', "Vous voulez être kiné ?")
themeMedicoSocial.easyInsert('oui,non,non,non', "REDIRECTION")
themeMedicoSocial.easyInsert('oui,non,non,oui', ['medical'])
themeMedicoSocial.easyInsert('non,non,oui,non', "Plutôt coach ?")
themeMedicoSocial.easyInsert('non,non,oui,oui', ['sport','medecine'])
themeMedicoSocial.easyInsert('non,non,non,non', "REDIRECTION")
themeMedicoSocial.easyInsert('non,non,non,oui', ['sciences humaines et sociales','science sociales','social','sociologie'])
themeMedicoSocial.easyInsert('non,non,oui,non,non', "REDIRECTION")
themeMedicoSocial.easyInsert('non,non,oui,non,oui', ['sport'])

//console.log([...themeMedicoSocial.preOrderTraversal()].map(x => x.value));

const themeCommerce = new Tree(1, "Est-ce que tu veux faire Du marketing et de la communication ?")
themeCommerce.easyInsert('non', "Une ecole de commerce généraliste ?")
themeCommerce.easyInsert('oui', ['publicite','marketing'])
themeCommerce.easyInsert('non,non', "REDIRECTION")
themeCommerce.easyInsert('non,oui', ['economie',"commerce de l'art",'commerce international','commerce'])

//console.log([...themeCommerce.preOrderTraversal()].map(x => x.value));

const themeInformatique = new Tree(1, "Est-ce que vous voulez faire une formation post-bac ?")
themeInformatique.easyInsert('non', "Vous voulez faire une école d'ingenieur ?")
themeInformatique.easyInsert('oui', "Ecole généraliste dans le digital ?")
themeInformatique.easyInsert('non,non', "REDIRECTION")
themeInformatique.easyInsert('non,oui', ['programmation','informatique','electrotechnique','bases de donnees','informatique de gestion','informatique industrielle et technologique'])
themeInformatique.easyInsert('oui,non', "Developpeur Web ?")
themeInformatique.easyInsert('oui,oui', ['developpement','programmation'])
themeInformatique.easyInsert('oui,non,non', "Design ?")
themeInformatique.easyInsert('oui,non,oui', ['developpement','programmation','informatique'])
themeInformatique.easyInsert('oui,non,non,non', "Marketing/communciation ?")
themeInformatique.easyInsert('oui,non,non,oui', ['arts graphiques','audiovisuel'])
themeInformatique.easyInsert('oui,non,non,non,non', "Jeux vidéos ?")
themeInformatique.easyInsert('oui,non,non,non,oui', ['marketing','communication'])
themeInformatique.easyInsert('oui,non,non,non,non,non', "REDIRECTION")
themeInformatique.easyInsert('oui,non,non,non,non,oui', ['arts graphiques','audiovisuel'])

//console.log([...themeInformatique.preOrderTraversal()].map(x => x.value));

const themeIndustriel = new Tree(1, "Est-ce que vous souhaitez faire une école d'ingenieur ?")
themeIndustriel.easyInsert('non', "Est-ce que vous êtes interessé par l'agroalimentaire / la biologie ?")
themeIndustriel.easyInsert('oui', "Avec prepa ?")
themeIndustriel.easyInsert('oui,non', "Est-ce que vous êtes interessé par l'agroalimentaire / la biologie ?")
themeIndustriel.easyInsert('oui,oui', ['biologie','agroalimentaire','science de la terre','protection des espèces naturelles'])
themeIndustriel.easyInsert('non,non', "Les maths & la physique ?")
themeIndustriel.easyInsert('non,oui', ['science de la terre',"science de l'univers",'protection des espèces naturelles','agroalimentaire','biologie'])
themeIndustriel.easyInsert('oui,non,non', "Les maths & la physique ?")
themeIndustriel.easyInsert('oui,non,oui', ['biologie','agroalimentaire','science de la terre','protection des espèces naturelles'])
themeIndustriel.easyInsert('non,non,non', "Plutôt chimie & physique sciences de l'ingenieur ?")
themeIndustriel.easyInsert('non,non,oui', ['math','physique'])
themeIndustriel.easyInsert('oui,non,non,non', "Plutôt chimie & physique sciences de l'ingenieur ?")
themeIndustriel.easyInsert('oui,non,non,oui', ['physique','math'])
themeIndustriel.easyInsert('non,non,non,non', "REDIRECTION")
themeIndustriel.easyInsert('non,non,non,oui', ['chimie','physique'])
themeIndustriel.easyInsert('oui,non,non,non,non', "REDIRECTION")
themeIndustriel.easyInsert('oui,non,non,non,oui', ['physique','chimie'])

//console.log([...themeIndustriel.preOrderTraversal()].map(x => x.value));

const themeArtMode = new Tree(1, "Est-ce que vous êtes interessé par les metiers de l'art ?")
themeArtMode.easyInsert('non', "La communication et la marketing de luxe ?")
themeArtMode.easyInsert('oui', "Aimez-vous dessiner ?")
themeIndustriel.easyInsert('non,non', "REDIRECTION")
themeIndustriel.easyInsert('non,oui', ['communication','marketing'])
themeIndustriel.easyInsert('oui,non', "Le théâtre ?")
themeIndustriel.easyInsert('oui,oui', ['arts graphiques','arts plastiques','arts','arts appliques',"artisanat d'art"])
themeIndustriel.easyInsert('oui,non,non', "L'architecture ?")
themeIndustriel.easyInsert('oui,non,oui', ['arts du spectacle'])
themeIndustriel.easyInsert('oui,non,non,non', "Le webdesign ?")
themeIndustriel.easyInsert('oui,non,non,oui', ['architecture'])
themeIndustriel.easyInsert('oui,non,non,non,non', "REDIRECTION")
themeIndustriel.easyInsert('oui,non,non,non,oui', ['arts graphiques'])

//console.log([...themeArtMode.preOrderTraversal()].map(x => x.value));

const themeHotelerie = new Tree(1, "Est-ce que vous êtes interessé par l'hôtellerie/ restauration ?")
themeHotelerie.easyInsert('non', "Par le tourisme ?")
themeHotelerie.easyInsert('oui', "Vous avez une préférence?")
themeHotelerie.easyInsert('non,oui', ['tourisme','transport'])
themeHotelerie.easyInsert('non,non', "REDIRECTION")
themeHotelerie.easyInsert('oui,non', ['hôtellerie','restauration'])
themeHotelerie.easyInsert('oui,oui', "Les metiers de bouche ?")
themeHotelerie.easyInsert('oui,oui,non', "L'hôtellerie ?")
themeHotelerie.easyInsert('oui,oui,oui', ['restauration'])
themeHotelerie.easyInsert('oui,oui,non,non', "REDIRECTION")
themeHotelerie.easyInsert('oui,oui,non,oui', ['hôtellerie'])

//console.log([...themeHotelerie.preOrderTraversal()].map(x => x.value));

let themesToExport = {
    'Agriculture': themeAgriculture,
    'Architecture/Urbanisme': themeArchitecture,
    'Banque/Assurance': themeBanque,
    'Traduction/Interprétation': themeTraduction,
    'Communication/Journalisme': themeCommunication,
    'Audio visuel/Édition': themeAudiovisuel,
    'Bâtiments/Travaux publics': themeBTP,
    'Droit/Eco/Gestion': themeDroit,
    'Enseignement': ThemeEnseignement,
    'Hôtellerie/Restauration/Tourisme': themeHotelerie,
    'Art/Mode': themeArtMode,
    'Industrie/Ingénieur': themeIndustriel,
    'Informatique/Internet/Web': themeInformatique,
    'Commerce/Marketing': themeCommerce,
    'Médical/Social/Sport': themeMedicoSocial
}

let questionsToExport = {
    'yoStudy': "Combien de temps voulez-vous étudier ?",
    'paid': "Voulez-vous être dans le public ?",
    'alternship': "Voulez-vous faire de l'apprentissage ?",
    'stateRecognized': "Est-ce qu'un diplôme reconnu par l'état est important pour vous ?",
    'location': "Avez-vous une préfèrence de localisation ?",
    'idf': 'Voulez-vous être en Île-de-France ?',
    'bigTown': 'Ou dans une grande ville peut-être ?'
}

let mappedQuestionsToExport = ['yoStudy', 'paid', 'alternship', 'stateRecognized', 'location', 'idf', 'bigTown']

export const themes = themesToExport
export const questions = questionsToExport
export const mappedQuestions = mappedQuestionsToExport