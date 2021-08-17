import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'


import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'


export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle} = useAuth()

    async function handleCreateRoom(){
        if (!user){
          await signInWithGoogle()
        }

        history.push('/roons/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e responstas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo da google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma salas</div>
                    <form>
                        <input type="text" 
                        placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
