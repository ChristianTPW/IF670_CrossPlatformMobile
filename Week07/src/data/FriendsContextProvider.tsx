import React, { useState } from 'react';
import FriendsContext, { Friend } from "./friend-context";


const FriendsContextProvider: React.FC = props => {
    const [friends, setFriends] = useState<Friend[]>([
        {
            id: 'f1',
            name: 'John Thor',
            image: 'https://gravatar.com/avatar/0ddcd8056f93e95490b02af56d835044?s=400&d=robohash&r=x'
        }
    ]);

    const addFriend = (name: string, image: string) => {
        const newFriend: Friend = {
            id: Math.random().toString(),
            name: name,
            image: image
        }

        setFriends((currFriends: Friend[]) => {
            return currFriends.concat(newFriend);
        });
        console.log(friends);
    };

    const updateFriend = (id: string, newName: string) => {
        setFriends((currFriends: Friend[]) => {
            const temp = currFriends.find(friend => friend.id == id)!.name = newName;
            return currFriends;
        });
    };

    const deleteFriend = (id: string) => {
        console.log(friends, "a");

        setFriends((currFriends: Friend[]) => {
            return currFriends.filter(friend => friend.id != id);
        });
    };

    return (
        <FriendsContext.Provider value={{
            friends,
            addFriend,
            updateFriend,
            deleteFriend
        }}>
            {props.children}
        </FriendsContext.Provider>
    );
};

export default FriendsContextProvider;