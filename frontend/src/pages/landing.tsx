import { useRecoilValue } from "recoil"
import { userState } from "../stores/atoms/user"

const LandingPage = () => {
    const user = useRecoilValue(userState)

    return <div>
        <WelcomeText />
        <div className="flex justify-center my-3">
            <JoinChatButton />
        </div>
        <div className="image-container h-full w-full">
            <img src="../../landing-page.svg" />
        </div>
    </div>
}

const WelcomeText = () => {
    const user = useRecoilValue(userState)

    return <div className="my-16 text-center text-sm md:text-3xl font-bold subpixel-antialiased text-gray-600 font-sans">
        <div>
            Welcome! {user.username} 
        </div>
        <div>
            Start chatting with Random people at Chat.io
        </div>
    </div>
}

const JoinChatButton = () => {

    return <a href="/chat" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 md:px-8 py-1.5 md:py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gray-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-zinc-300 ring-offset-gray-200 hover:ring-offset-zinc-500 ease focus:outline-none">
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="relative z-20 flex items-center text-sm">
            <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Join Chat
        </span>
    </a>
}

export default LandingPage