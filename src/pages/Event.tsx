import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Lesson } from "../components/Lesson";
import { Player } from "../components/Player";

export function Event() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Player />
            <Lesson />
        </div>
    )
} 