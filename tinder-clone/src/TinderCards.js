import React, { useState,useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from "axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const req = await axios.get("http://localhost:3000/tinder/card");

            setPeople(req.data);
        }

        fetchData();
    },[]);

    console.log(people)

    const Swiped = (Direction,nameToDelete) => (
        console.log("removing " + nameToDelete)
    );

    const outOfFrame = (name) =>(
        console.log(name + " left the Screen")
    );


    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        onSwipe={(dir) => Swiped(dir, person.name)}
                    >
                        <div className="card" style = {{ backgroundImage : `Url(${person.imgUrl})`}}>
                        <h3>{person.name}</h3>
                        </div>
                        
                    </TinderCard>
                     
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
