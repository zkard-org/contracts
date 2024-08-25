import { deployContract } from "./utils";

// An example of a basic deploy script
// It will deploy a Greeter contract to selected network
// as well as verify it on Block Explorer if possible for the network
export default async function () {
  const contractArtifactName = "Account";
  const constructorArguments = ["0x6cDc52c673404B6054c28c7BfA5aeBdF1Dacb2bb"];
  await deployContract(contractArtifactName, constructorArguments);
}
