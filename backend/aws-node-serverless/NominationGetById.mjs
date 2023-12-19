export const handler = async (event, context, callback) => {
    const id = event.pathParameters.id;
    const dummyInfo1 = {
        nominationId: 1,
        nominator: "Nick Truong",
        nominee: "Stephen Totten",
        awardType: "Spot",
        awardId: ""
    }
    const dummyInfo2 = {
        nominationId: 2,
        nominator: "Kevin Ng",
        nominee: "Fatema Hussain",
        awardType: "Above and Beyond",
        awardId: "1"
    }  
    const dummyInfo3 = {
        nominationId: 3,
        nominator: "Dharmendra Sharma",
        nominee: "Sayali Deshmuhk",
        awardType: "Drona",
        awardId: "2"
    }    
    switch (id) {
        case "1": return dummyInfo1;
        case "2": return dummyInfo2;
        case "3": return dummyInfo3;
        default: return "No id exists"
    }
  };