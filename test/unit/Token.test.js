const { assert, expect } = require("chai")
const { deployments, ethers, network, getNamedAccounts } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle", function () {
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])
              token = await ethers.getContract("OurToken", deployer)
          })

          describe("constructor", async function () {
              it("Created a token with the correct name, symbol and initial supply", async function () {
                  const initialSupply = await token.getInitialSupply()
                  console.log(
                      `Initial token supply is: ${ethers.utils.formatUnits(initialSupply, 18)}`
                  )
                  const name = await token.name()
                  console.log(`Token name is: ${name}`)
                  const symbol = await token.symbol()
                  console.log(`Token symbol is: ${symbol}`)
                  assert.equal(
                      initialSupply.toString(),
                      ethers.utils.parseUnits("50", 18).toString()
                  )
                  assert.equal(name, "OurToken")
                  assert.equal(symbol, "OT")
              })
          })
      })
