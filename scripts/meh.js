// MEH
const MEH_AD_V1 = "0xe38776063ca88513Db83Cb1B9915bc2D25447b11"
const EMPTY_PROOF = ["0x0000000000000000000000000000000000000000000000000000000000000000"];
const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_baseContractAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_router",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_linkTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_ercAdAddress",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "_destinationChainSelector",
                "type": "uint64"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "messageId",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fees",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "linkBalance",
                "type": "uint256"
            }
        ],
        "name": "MessageSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "baseContractAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "destinationChainSelector",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "displayAd",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "adURI",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "dataURI",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "signatureRoot",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "audienceRoot",
                        "type": "bytes32"
                    }
                ],
                "internalType": "struct IERCAd.Ad",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ercAdContract",
        "outputs": [
            {
                "internalType": "contract IERCAd",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "linkToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "router",
        "outputs": [
            {
                "internalType": "contract IRouterClient",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "eth",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "link",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct MehAdV2.CrossChainCapital",
                "name": "message",
                "type": "tuple"
            }
        ],
        "name": "sendMessage",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "messageId",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "bytes32[]",
                "name": "proof",
                "type": "bytes32[]"
            }
        ],
        "name": "signAd",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

async function createButton() {
    // count up
    await displayMeh();
    await checkDesiredChain();

    const img = document.createElement('img');
    img.src = `/images/sign_ad.png`;
    img.classList.add('sign-button');
    img.addEventListener('click', () => {
        signAd();
    });

        const signDiv = document.getElementById('sign_ad');
        signDiv.insertAdjacentElement('afterbegin', img); // Append to overlay on larger screens
}

async function signAd() {
    try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const mehAd = new web3.eth.Contract(ABI, MEH_AD_V1);

        const gasLimit = 250000; // Hardcoded gas limit

        const result = await mehAd.methods.signAd(1, EMPTY_PROOF).send({
            from: accounts[0],
            gas: gasLimit
        });

        console.log(result);
        Toastify({
            text: "Signed",
            duration: 5000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "#ffffff",
        }).showToast();
    } catch (error) {
        console.error(error);
    }
}

async function displayMeh() {
    try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];

        const linkTokenAddress = '0x514910771AF9Ca656af840dff83E8264EcF986CA';
        const linkTokenAbi = [
            {
                constant: true,
                inputs: [{ name: "_owner", type: "address" }],
                name: "balanceOf",
                outputs: [{ name: "balance", type: "uint256" }],
                type: "function"
            }
        ];

        const linkTokenContract = new web3.eth.Contract(linkTokenAbi, linkTokenAddress);
        const linkBalance = await linkTokenContract.methods.balanceOf(account).call();

        const mehTokens = linkBalance >= web3.utils.toWei('1', 'ether') ? 550000 : 50000;
        animateCountUp(mehTokens);
    } catch (error) {
        console.error(error);
    }
}

function animateCountUp(target) {
    let current = 0;
    const increment = target / 25; // Divide the target into 100 steps
    const countUpElement = document.getElementById('count-up');

    const interval = setInterval(() => {
        if (current >= target) {
            clearInterval(interval);
        } else {
            current += increment;
            countUpElement.innerText = `${current.toLocaleString(undefined, { maximumFractionDigits: 0 })} MEH`;
        }
    }, 100);
}

async function checkDesiredChain(_chainId = '0x1') {
    await window.ethereum.request({ method: 'eth_chainId' }).then((chainId) => {
        currChain = chainId;
    });
    if (_chainId != currChain) {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: _chainId }]
        }).then((out) => {
            window.location.reload();
        }).catch((e) => {
            if (e.code === 4902) {
                // When we want to get a step fancier, 
                //   helpChain(_chainId);
                console.error(`You will need to add chain ${_chainId}`);
                Toastify({
                    text: "You will need to add the base chain to your wallet to sign the ad.",
                    duration: 5000,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    backgroundColor: "#ffffff",
                }).showToast();
            }
            Toastify({
                text: "There was an error. Make sure your wallet is connected to meh.network.",
                duration: 5000,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "#ffffff",
            }).showToast();
        });
    };
    return _chainId;
}
