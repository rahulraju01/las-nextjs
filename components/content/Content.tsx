import { userListState, userNameState } from "@/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserDashboard } from "./UserDashboard";
import { v4 as uuidv4 } from 'uuid';
import { User } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Content = () => {
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userData, setUserData] = useRecoilState(userListState);

    const trackUserName = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
        setUserName(event.target.value);
    }

    const addUser = () => {
        const user: User = { id: uuidv4(), name: userName };
        setUserData((prevUserData) => [...prevUserData, user]);
    }

    return (
        <div>
            <div className="flex w-full max-w-sm items-center space-x-2 mb-10">
                <Input type="username" placeholder="username" value={userName} onChange={trackUserName} />
                <Button type="submit" onClick={addUser}>Submit</Button>
                <Button variant="outline" onClick={() => console.log(userData)}>view output</Button>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <ul>
                    <UserDashboard />
                </ul>
            </div>
        </div>
    );
}