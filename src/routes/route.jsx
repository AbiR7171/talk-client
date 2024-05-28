import { createBrowserRouter } from "react-router-dom";
import LobbyScreen from "../screens/Lobby";
import RoomPage from "../screens/Room";

const router = createBrowserRouter([
    {
        path:"/",
        element: <LobbyScreen/>
    },
    {
        path: "/room/:roomId",
        element: <RoomPage/>
    }
])

export default router;