import React from 'react';
import KnowMore from '../../../Component/KnowMore/KnowMore';
import BestLargest from '../BestLarest/BestLargest';
import ExperienceAndReality from '../../../Component/KnowMore/ExperienceAndReality';
import NumberOfCars from '../../../Component/KnowMore/NumberOfCars';

const KnowMoreRoute = () => {
    return (
        <div>
            <KnowMore/>
            <BestLargest/>
            <ExperienceAndReality/>
            <NumberOfCars/>
        </div>
    );
};

export default KnowMoreRoute;