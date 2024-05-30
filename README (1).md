
# X-Wave POE Marketplace

## Description

This project is a decentralized marketplace built on the Celo blockchain, allowing users to list and purchase products using cUSD. The marketplace leverages smart contracts for secure and transparent transactions.

## Features

- Connect to a Celo wallet.
- Display user balance in cUSD.
- List all available products.
- Add new products to the marketplace.
- Purchase products using cUSD.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourgithubusername/celo-boilerplate-web-dapp.git
   cd celo-boilerplate-web-dapp
   ```

2. **Pick your poison**

   ```bash
   npm install
   ```
    ```bash
   yarn install
   ```

3. **Run the Development Server**

    ```bash
   npm start
   ```
     ```bash
   yarn start
   ```
   This will run the development server at `http://localhost:9000`.


## Usage

After starting the development server, navigate to `http://localhost:9000` in your web browser. Ensure that your Celo wallet extension is installed and set up.

- Click on **Connect Celo Wallet** to connect your wallet to the DApp.
- Once connected, your balance will be displayed, and you can interact with the marketplace.

## Contract Interaction

The project uses a smart contract deployed on the Celo network at the address `0x7E0efb852B65d4bD3856fdC250fed80523eDC329`. The smart contract allows for listing and purchasing products.

### Adding a Product

- Fill in the product details in the **Add Product** modal and submit.
- The product will be listed in the marketplace upon successful transaction confirmation.

### Purchasing a Product

- Click on the **Buy** button for the desired product.
- Approve the transaction from your Celo wallet.
- Upon successful purchase, the product will be marked as sold.

## Troubleshooting

If you encounter any issues with the DApp, check the following:

- Ensure that the Celo wallet extension is active and properly configured.
- Check the browser console for errors related to network connections or transactions.
- Ensure that the smart contract address and ABI are correctly configured in your project.

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your features or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
