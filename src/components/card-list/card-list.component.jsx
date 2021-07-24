import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.css';


//CardList compoenet is reponsible for how cards are arranged
export const CardList = props => (            // props have method children which are
                                            // any thing that has been passed between the <CardList> and </CardList> in the App.js file
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);