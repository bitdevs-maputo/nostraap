import ChatProf from "@/components/ui/chatprof";

export default function UlChat(){
    
    const year = new Date().getFullYear();

    return(
        <ul className="flex-1 w-full overflow-y-auto flex flex-col chat-scroll mr-1 gap-4 p-2">

            <div className="">
                <h1 className="p-2 text-2xl font-bold">Pins</h1>

                <div className="pins relative w-full flex flex-col items-center justify-center  ">

                    <div className="w-full h-full flex flex-col z-2 items-center justify-center">

                        <ChatProf
                        name="Chat 1"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/>   

                        <ChatProf
                        name="Chat 2"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/>

                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />

                    </div>

                    <div className="background p-2 bg-gray-500/90 rounded-xl absolute z-0 w-full h-full" />

                </div>
            </div>

            <div className="">
                <h1 className="p-2 text-2xl font-bold">Messages</h1>

                <div className="messages relative w-full flex flex-col items-center justify-center  ">

                    <div className="w-full h-full flex flex-col z-2 items-center justify-center">

                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />
                        <span className="w-[90%]  h-px bg-white/30 rounded-full"/> 
                        <ChatProf
                        name="Chat 3"
                        status="Online"
                        messagePreview="vamos retificar aqui se os estatos forem online vema cor em verde e semibold se nao mantem a cor e a font e no preview mesagem nao dev haver quebra de linha se a mesnagem for grande e tamebm a logica do onreadindicator"
                        />

                    </div>

                    <div className="background p-2 bg-gray-500/90 rounded-xl absolute z-0 w-full h-full" />

                </div>
            </div>

                <footer  className="w-full bottom-0 h-16 mb-20  flex items-center justify-center">
                <p className="text-white">© {year} NostrApp. All rights reserved.</p>
            </footer>

        </ul>
    );
}