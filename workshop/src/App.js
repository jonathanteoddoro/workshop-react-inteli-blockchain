import logo from "./assets/logo.svg"
import Input from "./components/Input";
import Button from "./components/Button"
import github from "./assets/github.svg"
import wpp from "./assets/wpp.svg"

function App() {
    return (
        <div className="h-screen flex flex-col items-center">
            <div className="w-3/6 h-3/6 justify-center mb-5">
                <img src={logo}></img>

            </div>
            <div className="shadow-lg rounded-lg w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white text-white bg-opacity-20 px-4 py-8 backdrop-blur-lg"> 
                <p className='text-white mb-2 text-2xl'>Receba sua Proof-Of-Attandance NFT</p>
                <p className="text-white mb-2 text-lg">Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.</p>
                <p className='text-white mb-4 text-lg'>Ainda não tem uma carteira? Acesse o link e crie a sua já: <a href='https://metamask.io/download/' className="text-blue-500">Clique aqui.</a></p>
                
                <div className="flex flex-col items-left">
                <Input desc='Seu nome:' textinho="Esse nome será gravado no NFT para provar sua presença" placeholder="Digite seu nome" />
                <Input desc='Email:' textinho='Email para receber novidades' placeholder="your.email@email.com"/>
                <Input desc='Wallet'textinho='Carteira para receber o NFT na rede Sepolia' placeholder="0x00...0000"/></div>
                <Button/>
                </div>
               

                <div className="items-center flex p-2 text-white text-sm"><a href='https://github.com/jonathanteoddoro/workshop-react-inteli-blockchain.git'>Todo o código pode ser encontrado aqui:   </a><img className="w-6 h-6 ml-2" src={github}></img>
                </div>
                <div className="items-center flex p-2 text-white text-sm"><a href='https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz'>Caso tenha alguma dúvida: </a> <img className="w-6 h-6 ml-2" src={wpp}></img></div>
                </div>
           
     
    );
}

export default App;
