export const handler = async (event, context, callback) => {
    const dummyInfo1 = {
        nominationId: 1,
        nominator: "Stephen Totten",
        nominee: "Nick Truong",
        awardType: "Spot",
        awardId: ""
    }
    const dummyInfo2 = {
        nominationId: 2,
        nominator: "Fatema Hussain",
        nominee: "Kevin Ng",
        awardType: "Above and Beyond",
        awardId: "1"
    }  
    const dummyInfo3 = {
        nominationId: 3,
        nominator: "Sayali Deshmuhk",
        nominee: "Dharmendra Sharma",
        awardType: "Drona",
        awardId: "2"
    }    
    const dummyList = [dummyInfo1, dummyInfo2, dummyInfo3]
    return dummyList;
  };