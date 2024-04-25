//Créer une classe nommée Boutique.
//Elle devra posséder les propriétés suivantes:
//name: string
//address: string
//type: string
//articles: string[]
//totalCash: number

class Boutique{//initialiser les propriétés de la classe Boutique
    constructor(name, address, type, articles, totalCash){//Paramètres : pour permettre l'instanciation de nouveaux objets
        this.name = name;
        this.address = address;
        this.type = type;
        this.articles = articles;
        this.totalCash = totalCash;

        //console.log(this);
    }

//toHtml cette fonction devra retourner un htmlElement contenant les informations de notre boutique. Ne pas utiliser innerHtml Voici la structure html attendue.
    toHtml(){
        /*const containerHtml = document.createElement('ul');
        const entries = Object.entries(this);

        console.log.entries;

        for(let entry of entries){
            let li = document.createElement('li');
            li.textContent = entry[0]+ ': ' + entry[1];
            containerHtml.appendChild(li);
        }*/
        const containerHtml = document.createElement('div');
        const nameHtml = document.createElement('p');
        const addressHtml = document.createElement('p');
        const typeHtml = document.createElement('p');
        const articlesHtml = document.createElement('p');
        const totalCashHtml = document.createElement('p');

        nameHtml.textContent = 'Name of the boutique : ' + this.name;
        addressHtml.textContent ='Address : ' + this.address;
        typeHtml.textContent = 'Type : ' + this.type;
        articlesHtml.textContent = 'Articles : ' + this.articles.join(', ');
        totalCashHtml.textContent = 'Total cash : ' + this.totalCash;

        containerHtml.appendChild(nameHtml);
        containerHtml.appendChild(addressHtml);
        containerHtml.appendChild(typeHtml);
        containerHtml.appendChild(articlesHtml);
        containerHtml.appendChild(totalCashHtml);
        return containerHtml;
    }
        //Elle devra posséder les méthodes suivantes:

        //buy prenant un nom d’article et un prix en paramètre. Si l’article est disponible à l’intérieur de la propriété articles, incrémenter la propriété totalCash du prix reçu en paramètre.
    buy(article, price){
        //Vérifier si l'article est disponible à l'intérieur de la propriété articles.
        if(this.articles.includes(article)){
            this.totalCash += price;
        }
    }

    getTotalCash(){
        return this.totalCash + '$';
    }

    //refund prenant name et montant en paramètre. Si le paramètre name est égal à la propriété name et que le paramètre montant <= à la propriete totalCash retourne le paramètre montant. Sinon retourne 0.

    /*refund(boutiqueName, amount) {
        if (boutiqueName === this.name && amount <= this.totalCash){
            return amount;
        } 
        return 0;
    }*/
    refund(boutiqueName, amount) {
        return boutiqueName === this.name && amount <= this.totalCash ? amount : 0;
    }
}

const boutiques = [
    new Boutique(
        'Brown',
        '5401, boulevard des Galeries, Québec (Québec)  G2K 1N4',
        'chaussures',
        ['sandales Wishbone Perla Sandal', 
        'talons hauts Gianni Renzi Cassandra', 
        'talons plats Dr. Martens Adrian Bex', 
        'espadrilles Puma Palermo', 
        'pantoufles Fluff Yeah Slide'],
        0
    ),
    new Boutique(
        'Benjo',
        '550, boulevard Charest Est, Québec (Québec)  G1K 3J3',
        'jouets',
        ['jeu de société 7 Wonders', 
        'jeu de construction LEGO Atari 2600 (10306)',
        'baguette en léviatation Schylling',
        'lunettes Star Wars Yoda',
        'poupée astronaute Daron'],
        0
    ),
    new Boutique(
        'IKEA',
        '3400, avenue Blaise-Pascal, Québec (Québec)  G1X 0E4',
        'articles pour la maison prêts à monter',
        ['Rangement mobile, multicolore TESAMMANS',
        'Table, acacia SKOGSTA',
        'Causeuse, Vissle gris foncé LINANÄS',
        'Ustensiles de cuisine, 5 pièces, gris FULLÄNDAD',
        'Lampe de table à DEL, fusée/multicolore AFTONSPARV',
        ],
        0
    ),
]

//Créez un tableau de 3 boutiques.

//Pour chacune des boutiques, utilisez la méthode toHtml afin d’ajouter le htmlElement au body.

//Boucler pour voir toutes les possibilités de chaque boutique en HTML
boutiques.forEach(boutique => {
    document.body.appendChild(boutique.toHtml());
});

// Transaction pour l'achat d'une paire de sandales
boutiques[0].buy('sandales Wishbone Perla Sandal', 198)
// Mettre à jour l'itération dans le tableau boutiques
boutiques.forEach((boutique, index) =>{
    // Créer un nouvel élément HTML pour la boutique mise à jour
    const updatedHtml = boutique.toHtml();
    // Remplacer l'élément HTML qui correspond à la boutique dans le document    
    const currentHtml = document.querySelectorAll(boutique)[index];
    currentHtml.replaceWith(updatedHtml);
});
/*document.body.appendChild(boutiques[0].toHtml());*/

    //Defi:
    //Utilisez la méthode find du type array afin de sélectionner seulement la boutique ayant un propriété type contenant une valeur spécifique.

//const soulierBoutique = boutiques.find((boutique) => boutique.type === 'soulier');