
import React, { Component } from "react";
// import logo from './subletPic/GiggsRyan-t.jpg';

export const subletDurationCategory = [3, 5, 10, 14, 21, 30, 90]; //The duration of sublet ads that the user (searcher) marked as a like

export const maxPriceCategoryPerNight = [150, 250, 350, 500, 650, 750, 850, 1000]; //The maximum price a user searched for a sublet ad per night

export const DivisionOfHaifa =
{
    startNorth: 32.9,
    endNorth: 32.8114,
    startCenter: 32.8114,
    endCenter: 32.7929,
    startSouth: 32.7929,
    endSouth: 32.7614,
    name: "Haifa",
}

export const DivisionOfTelAviv =
{
    startNorth: 32.1338,
    endNorth: 32.0808,
    startCenter: 32.0808,
    endCenter: 32.0561,
    startSouth: 32.0561,
    endSouth: 32.0326,
    name: "Tel-Aviv",
}

export const DivisionOfJerusalem =
{
    startNorth: 31.8137,
    endNorth: 31.7962,
    startCenter: 31.7962,
    endCenter: 31.7872,
    startSouth: 31.7872,
    endSouth: 31.3498,
    name: "Jerusalem",
}

export const DivisionOfEilat =
{
    startNorth: 29.4697,
    endNorth: 29.562,
    startCenter: 29.562,
    endCenter: 29.5511,
    startSouth: 29.5511,
    endSouth: 29.5079,
    name: "Eilat",
}

export const PublishTypesOfApartments =
    [
        { TypeName: "Studio", },
        { TypeName: "Garden Apartment", },
        { TypeName: "Penthouse", },
        { TypeName: "Standard apartment" },
    ];

export const SearchTypesOfApartments =
    [
        { TypeName: "Without preference", },
        { TypeName: "Studio", },
        { TypeName: "Garden Apartment", },
        { TypeName: "Penthouse", },
        { TypeName: "Standard apartment" },
    ];

export const SearchCityAreaCategory =
    [
        {
            name: "Without preference",
        },
        {
            name: "North",
        },
        {
            name: "Center",
        },
        {
            name: "South",
        },
    ]

export const PublishCityAreaCategory =
    [
        {
            name: "the Sublet area at the city",
        },
        {
            name: "North",
        },
        {
            name: "Center",
        },
        {
            name: "South",
        },
    ]

export const SearchCountryAreaCategory =
    [
        {
            kod: 0,
            name: "Without preference",
        },
        {
            kod: 4,
            name: "Haifa",
        },
        {
            kod: 3,
            name: "Tel-Aviv",
        },
        {
            kod: 2,
            name: "Jerusalem",
        },
        {
            kod: 7,
            name: "Eilat",
        },
    ]

export const PublishCountryAreaCategory =
    [
        {
            kod: "0",
            name: "Choose City",
        },
        {
            kod: "4",
            name: "Haifa",
        },
        {
            kod: "3",
            name: "Tel-Aviv",
        },
        {
            kod: "2",
            name: "Jerusalem",
        },
        {
            kod: "7",
            name: "Eilat",
        },
    ]


export const ApartmentStack =
    [

        {
            Id: "5",
            city: 4,
            cityArea: "Center",
            streetName: "haprachim",
            NumberApr: 18,
            dateCheckIn: "2019-05-28",
            dateCheckOut: "2019-05-30",
            PricPerNight: 120,
            propType: "Studio",
            squareMeter: 33,
            FloorNu: 3,
            GeneralDescription: "ANAT",
            isFacebook: "1",
            Roommates: "0",
            NiceToHaveArr: [
                {
                    name: "isRenovated",
                    value: 0
                },
                {
                    name: "isBalcony",
                    value: 1
                },
                {
                    name: "isAccessible",
                    value: 1
                },
                {
                    name: "isParking",
                    value: 0
                },
                {
                    name: "isYard",
                    value: 0
                },
                {
                    name: "isElevator",
                    value: 0
                },
                {
                    name: "isBared",
                    value: 0
                },
                {
                    name: "isStorage",
                    value: 0
                },
                {
                    name: "isConditioner",
                    value: 0
                },
                {
                    name: "isFurnished",
                    value: 0
                },
                {
                    isAnimals: "isFurnished",
                    value: 0
                }
            ]
        }
    ]

export const UserPreferences =
    [
        {
            DurationKod: 1,
            PriceKod: 0,
            CityKod: 3,
            CityArea: "Center"
        },
        {
            DurationKod: 1,
            PriceKod: 1,
            CityKod: 3,
            CityArea: "Center"
        },
        {
            DurationKod: 0,
            PriceKod: 0,
            CityKod: 2,
            CityArea: "Without preference"
        },
        {
            DurationKod: 1,
            PriceKod: 1,
            CityKod: 2,
            CityArea: "Without preference"
        },
        {
            DurationKod: 1,
            PriceKod: 0,
            CityKod: 3,
            CityArea: "North"
        },
    ]

export const belongingVector = [
    {
        range: [0, 0.1], // range of deviation
        Percent: 0.9, // Percent of belonging
        name: "clearly Belonging "  // It means
    },
    {
        range: [0.11, 0.2],
        Percent: 0.8,
        name: "strong Belonging"
    },
    {
        range: [0.21, 0.25],
        Percent: 0.7,
        name: "Likely Belonging"
    },
    {
        range: [0.26, 0.3],
        Percent: 0.6,
        name: "medium Belonging"
    },
    {
        range: [0.31, 0.49],
        Percent: 0.4,
        name: "weak Belonging"
    },
]



export const constNamesProp =
    [
        {
            name: "Renovated",
        },
        {
            name: 'Balcony',
        },
        {
            name: 'Accessible',
        },
        {
            name: 'Parking',
        },
        {
            name: 'Yard',
        },
        {
            name: 'Elevator',
        },
        {
            name: 'Bared',
        },
        {
            name: 'Storage',
        },
        {
            name: 'Furnished',
        },
        {
            name: 'Animals',
        },
    ]


class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishValues: this.props.location.state[0], // כאן יש לי אובייקט של דירה 
            //  publishValues: this.props, // כאן יש לי אובייקט של דירה 
            subletItemsStock: ApartmentStack,
        };
    };


    AddSubletItemToStock = () => {
        debugger;
        this.state.subletItemsStock.push(this.state.publishValues)
        this.setState(
            this.state
        )

    }

    componentDidMount() {
        this.AddSubletItemToStock();
    }

    render() {
        debugger;

        return (
            <div>
                <h2>you add new sublet ! </h2>
                <h2> at the stock we have {this.state.subletItemsStock.length} apartments </h2>
                {/* <img src={logo} /> */}
            </div>
        );
    }

}

export default Data;
