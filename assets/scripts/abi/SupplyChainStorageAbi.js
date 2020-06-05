var SupplyChainStorageAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "lastAccess",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "caller",
            "type": "address"
          }
        ],
        "name": "AuthorizedCaller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "caller",
            "type": "address"
          }
        ],
        "name": "DeAuthorizedCaller",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_caller",
            "type": "address"
          }
        ],
        "name": "authorizeCaller",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_caller",
            "type": "address"
          }
        ],
        "name": "deAuthorizeCaller",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_userAddress",
            "type": "address"
          }
        ],
        "name": "getUserRole",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_batchNo",
            "type": "address"
          }
        ],
        "name": "getNextAction",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_userAddress",
            "type": "address"
          },
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_contactNo",
            "type": "string"
          },
          {
            "name": "_alamat",
            "type": "string"
          },
          {
            "name": "_role",
            "type": "string"
          },
          {
            "name": "_isActive",
            "type": "bool"
          },
          {
            "name": "_profileHash",
            "type": "string"
          }
        ],
        "name": "setUser",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_userAddress",
            "type": "address"
          }
        ],
        "name": "getUser",
        "outputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "contactNo",
            "type": "string"
          },
          {
            "name": "alamat",
            "type": "string"
          },
          {
            "name": "role",
            "type": "string"
          },
          {
            "name": "isActive",
            "type": "bool"
          },
          {
            "name": "profileHash",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_batchNo",
            "type": "address"
          }
        ],
        "name": "getBasicDetails",
        "outputs": [
          {
            "name": "sentraProduksi",
            "type": "string"
          },
          {
            "name": "jenisCabai",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_sentraProduksi",
            "type": "string"
          },
          {
            "name": "_jenisCabai",
            "type": "string"
          }
        ],
        "name": "setBasicDetails",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          },
          {
            "name": "_namaProdusen",
            "type": "string"
          },
          {
            "name": "_tanggalPanen",
            "type": "uint256"
          },
          {
            "name": "_jumlahJual",
            "type": "uint256"
          },
          {
            "name": "_hargaJual",
            "type": "uint256"
          },
          {
            "name": "_tanggalJual",
            "type": "uint256"
          },
          {
            "name": "_tujuanPengiriman",
            "type": "string"
          }
        ],
        "name": "setProdusenData",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "getProdusenData",
        "outputs": [
          {
            "name": "namaProdusen",
            "type": "string"
          },
          {
            "name": "tanggalPanen",
            "type": "uint256"
          },
          {
            "name": "jumlahJual",
            "type": "uint256"
          },
          {
            "name": "hargaJual",
            "type": "uint256"
          },
          {
            "name": "tanggalJual",
            "type": "uint256"
          },
          {
            "name": "tujuanPengiriman",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          },
          {
            "name": "_namaPengepul",
            "type": "string"
          },
          {
            "name": "_diterimaCabai",
            "type": "uint256"
          },
          {
            "name": "_jumlahJual",
            "type": "uint256"
          },
          {
            "name": "_hargaJual",
            "type": "uint256"
          },
          {
            "name": "_tanggalJual",
            "type": "uint256"
          },
          {
            "name": "_tujuanPengiriman",
            "type": "string"
          }
        ],
        "name": "setPengepulData",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "getPengepulData",
        "outputs": [
          {
            "name": "namaPengepul",
            "type": "string"
          },
          {
            "name": "diterimaCabai",
            "type": "uint256"
          },
          {
            "name": "jumlahJual",
            "type": "uint256"
          },
          {
            "name": "hargaJual",
            "type": "uint256"
          },
          {
            "name": "tanggalJual",
            "type": "uint256"
          },
          {
            "name": "tujuanPengiriman",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          },
          {
            "name": "_namaPedagangGrosir",
            "type": "string"
          },
          {
            "name": "_diterimaCabai",
            "type": "uint256"
          },
          {
            "name": "_jumlahJual",
            "type": "uint256"
          },
          {
            "name": "_hargaJual",
            "type": "uint256"
          },
          {
            "name": "_tanggalJual",
            "type": "uint256"
          },
          {
            "name": "_tujuanPengiriman",
            "type": "string"
          }
        ],
        "name": "setPedagangGrosirData",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "getPedagangGrosirData",
        "outputs": [
          {
            "name": "namaPedagangGrosir",
            "type": "string"
          },
          {
            "name": "diterimaCabai",
            "type": "uint256"
          },
          {
            "name": "jumlahJual",
            "type": "uint256"
          },
          {
            "name": "hargaJual",
            "type": "uint256"
          },
          {
            "name": "tanggalJual",
            "type": "uint256"
          },
          {
            "name": "tujuanPengiriman",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          },
          {
            "name": "_namaPedagangEceran",
            "type": "string"
          },
          {
            "name": "_diterimaCabai",
            "type": "uint256"
          },
          {
            "name": "_jumlahJual",
            "type": "uint256"
          },
          {
            "name": "_hargaJual",
            "type": "uint256"
          }
        ],
        "name": "setPedagangEceranData",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "getPedagangEceranData",
        "outputs": [
          {
            "name": "namaPedagangEceran",
            "type": "string"
          },
          {
            "name": "diterimaCabai",
            "type": "uint256"
          },
          {
            "name": "jumlahJual",
            "type": "uint256"
          },
          {
            "name": "hargaJual",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }

]