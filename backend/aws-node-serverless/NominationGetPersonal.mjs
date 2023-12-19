export const handler = async (event, context, callback) => {
    const dummyInfo = {
        nominationId: 1,
        nominator: "Nick Truong",
        nominee: "Stephen Totten",
        awardType: "Spot",
        awardId: ""
    }  
    return dummyInfo;
  };