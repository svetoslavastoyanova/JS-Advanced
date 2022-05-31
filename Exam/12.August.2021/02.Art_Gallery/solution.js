class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 }; //object
        this.listOfArticles = []; // array
        this.guests = []; // array
    };

    addArticle( articleModel, articleName, quantity ){ // 'picture', 'Mona Liza', 3
        if(this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) === false){
            throw new Error(`This article model is not included in this gallery!`);
        }

        let articleToFind = this.listOfArticles.find(x => x.articleModel == articleModel.toLowerCase() && x.articleName == articleName);
        if(articleToFind){
            articleToFind.quantity += quantity
        }else{
            let newArticle = {
                articleModel: articleModel.toLowerCase(),
                articleName: articleName,
                quantity: quantity
            };
            this.listOfArticles.push(newArticle);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };

    inviteGuest( guestName, personality){ // 'John', 'Vip'
        if(this.guests.some(x => x.guestName === guestName)){
            throw new Error(`${guestName} has already been invited.`);
        } 

        let newGuest = {
            guestName: guestName,
            points: 0,
            purchaseArticles: 0
        }

        if(personality === "Vip"){
            newGuest.points = 500;
        }else if (personality === 'Middle'){
           newGuest.points = 250;
        }else {
           newGuest.points = 100;
        }

        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`;
    };

    buyArticle( articleModel, articleName, guestName){ // 'item', 'Ancient vase', 'Peter'
        let articleToFind = this.listOfArticles.find(x => x.articleName == articleName && x.articleModel == articleModel);
        let guest = this.guests.find(x => x.guestName == guestName);

        if(!articleToFind){
            throw new Error(`This article is not found.`);
        }
        if(articleToFind.quantity <= 0){
            return `The ${articleName} is not available.`;
        }
        if(!guest){
            return `This guest is not invited.`
        }

        if (guest.points < this.possibleArticles[articleModel]){
            return `You need to more points to purchase the article.`;
        }
        guest.points -= this.possibleArticles[articleModel];
        articleToFind.quantity -= 1;
        guest.purchaseArticles += 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    };

    showGalleryInfo(criteria){ // article or guest
        let result = [];

        if(criteria == 'article'){
            result.push('Articles information:');
            for(let article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
        }else if(criteria == 'guest'){
            result.push('Guests information:');
            for (let guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticles}`);
            }
        }

        return result.join('\n');

    }
};

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));