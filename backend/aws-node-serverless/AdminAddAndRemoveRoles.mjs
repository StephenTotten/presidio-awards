import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand, AdminRemoveUserFromGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

export const handler = async (event, context, callback) => {
  // action is specified path (should be admin/{action} where action is add or remove)
  const action = event.pathParameters.action;
  const client = new CognitoIdentityProviderClient();
  // Need to parse event body since serverless will not format correctly
  const body = JSON.parse(event.body);
  try {
    // Add role if action is add
    if (action == "add") {
      const addRole = { 
      UserPoolId: "us-east-1_JANIXGEDx", 
      Username: body.username, 
      GroupName: body.addedRole, 
      };
      let command = new AdminAddUserToGroupCommand(addRole);
      let response = await client.send(command);
      command = new AdminAddUserToGroupCommand(addRole);
      response = await client.send(command);
      return response;
    }
  
    // Remove role if action is remove
    if (action == "remove") {
      const removeRole = {
      UserPoolId: "us-east-1_JANIXGEDx", 
      Username: body.username, 
      GroupName: body.removedRole, 
      }
      let command = new AdminRemoveUserFromGroupCommand(removeRole);
      let response = await client.send(command);
      return response;
    }
  } catch (err) {
    console.log(err);
  }

  return event;
};