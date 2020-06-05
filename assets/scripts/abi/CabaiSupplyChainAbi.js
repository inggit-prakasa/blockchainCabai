var CabaiSupplyChainAbi = [
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
        "inputs": [
          {
            "name": "_supplyChainAddress",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "PerformCultivation",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "DoneProdusen",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "DonePengepul",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "DonePedagangGrosir",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "batchNo",
            "type": "address"
          }
        ],
        "name": "DonePedagangEceran",
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
            "name": "action",
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
        "name": "addBasicDetails",
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
        "constant": true,
        "inputs": [
          {
            "name": "_batchNo",
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
            "name": "_batchNo",
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
        "name": "updateProdusenData",
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
            "name": "_batchNo",
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
            "name": "_batchNo",
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
        "name": "updatePengepulData",
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
            "name": "_batchNo",
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
            "name": "_batchNo",
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
        "name": "updatePedagangGrosirData",
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
            "name": "_batchNo",
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
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_batchNo",
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
        "name": "updatePedagangEceranData",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }

]