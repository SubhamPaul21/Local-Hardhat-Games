// add the game address here and update the contract name if necessary
const gameAddr = "0x68B1D87F95878fE05B998F19b66F4baba5De1aed";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  // Game 2
  // const tx1 = await game.setX(25);
  // await tx1.wait();
  // const tx2 = await game.setY(25);
  // await tx2.wait();
  // Game 2

  // Game 3
  // const tx = await game.win(45);
  // Game 3

  // Game 4
  // const tx = await game.win(56);
  // Game 4

  // Game 5
  // const tx1 = await game.giveMeAllowance(10000);
  // await tx1.wait();
  // const tx2 = await game.mint(10000);
  // await tx2.wait();
  // Game 5


  const tx = await game.win();
  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
