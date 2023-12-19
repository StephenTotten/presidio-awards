export const handler = async (event, context, callback) => {
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
    const dummyList = [dummyInfo1, dummyInfo2, dummyInfo3]
    return dummyList;
  };