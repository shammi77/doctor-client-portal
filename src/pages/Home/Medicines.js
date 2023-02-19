import React, { useState } from 'react';
import MedicineRow from './MedicineRow';

const Medicines = () => {
    const medicines = [
        {
            _id:1,
            name:'Altoprev',
            indication:'ANTIFILARIAS',
            price:'$5'
        },
        {
            _id:2,
            name:'Diacerein cap 50 mg',
            indication:'DMARDs',
            price:'$5'
        },
        {
            _id:3,
            name:'7 Loratadine tab 5mg ',
            indication:'ANTIALLERGICS',price:'$5'
        },
        {
            _id:4,
            name:' Clobazam tab10 mg',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:5,
            name:'Ampicillin cap 1000 mg',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:6,
            name:'Clotrimazole vaginal tab 100mg',
            indication:'ANTIFUNGAL',price:'$5'
        },
        {
            _id:7,
            name:'Seclo',
            indication:'Gastric',price:'$5'
        },
        {
            _id:8,
            name:' Human Insulin NPH ',
            indication:'HORMONES and ANTIHORMONES',price:'$5'
        },
        {
            _id:9,
            name:' Terlipressin inj',
            indication:'HORMONES AND ANTIHORMONES',price:'$5'
        },
        {
            _id:10,
            name:' Betamethasone inj 12 mg/ ml',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:11,
            name:'Hydrocortisone tab ',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:12,
            name:'Ormeloxifene HCl tab I.P 30 mg',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:13,
            name:'Mometasone furoate cream 0. 1%',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:14,
            name:' Alendronate tab 5 mg, ',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:15,
            name:'Iron syr',
            indication:'ANTIANAEMIC DRUGS',price:'$5'
        },
        {
            _id:16,
            name:'Factor 8 ',
            indication:'BLOOD PRODUCTS',price:'$5'
        },
        {
            _id:17,
            name:'Heparin inj 5000 iu',
            indication:'antiplatelet',price:'$5'
        },
        {
            _id:18,
            name:'Low molecular weight heparin',
            indication:'antiarrhythmic',price:'$5'
        },
        {
            _id:19,
            name:'Prazosin',
            indication:'antihypertensive',price:'$5'
        },
        {
            _id:20,
            name:'Labetalol ',
            indication:'antihypertensive',price:'$5'
        },
        {
            _id:21,
            name:'Clotrimazole ',
            indication:'topical medicines',price:'$5'
        },
        {
            _id:22,
            name:'Povidone iodine ',
            indication:'topical medicines ',price:'$5'
        },
        {
            _id:23,
            name:'Ranitidine inj 150 mg/ml',
            indication:'anti peptic ulcer',price:'$5'
        },
        {
            _id:24,
            name:'Omeprazole cap 40 mg            ',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:25,
            name:'Cyclominol Tab 10mg',
            indication:'antispasmodic            ',price:'$5'
        },
        {
            _id:26,
            name:'metoclopramide tab 5',
            indication:'antivertigo',price:'$5'
        },
        {
            _id:27,
            name:'Dextran colloid ',
            indication:'solutions',price:'$5'
        },
        {
            _id:28,
            name:'haesteril ',
            indication:'plasma volume expander',price:'$5'
        },
        {
            _id:29,
            name:'Dinoprostone gel',
            indication:'prostaglandin analogues            ',price:'$5'
        },
        {
            _id:30,
            name:'renalin bottles',
            indication:'dialysis solutions',price:'$5'
        },
        {
            _id:31,
            name:'calcium carbonate tablets',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:32,
            name:'Altoprev',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:33,
            name:'B complex',
            indication:'vitamins & supplements',price:'$5'
        },
        {
            _id:34,
            name:'esmolol inj ',
            indication:'antihypertensive',price:'$5'
        },
        {
            _id:35,
            name:'IV fat emulsion',
            indication:'ANTIFILARIAS',price:'$5'
        },
        {
            _id:36,
            name:'flavoxate',
            indication:'Miscellaneous',price:'$5'
        },
        {
            _id:37,
            name:'hand disinfectant',
            indication:'Miscellaneous',price:'$5'
        },
        {
            _id:38,
            name:'Leucovorrin calcium Inj. 50mg/5ml ',
            indication:'ANTIFILAANTICANCER DRUGS            RIAS',price:'$5'
        },
        {
            _id:39,
            name:'Mycophenolate mofetil',
            indication:'Immune mediators',price:'$5'
        },
        {
            _id:40,
            name:'Methotrexate inj 50g/2ml ',
            indication:'ANTICANCER DRUGS            ',price:'$5'
        },
        {
            _id:41,
            name:'Levamisole',
            indication:'Immune mediators            ',price:'$5'
        },
        {
            _id:42,
            name:'Escitalopram ',
            indication:'antidepressants',price:'$5'
        },
        {
            _id:43,
            name:'Filgrastim Inj. 500mg',
            indication:'Cytokine            ',price:'$5'
        },
        {
            _id:44,
            name:'Benzydamine ',
            indication:'vitamins & supplements',price:'$5'
        },
        {
            _id:45,
            name:'Oxygen inhalation ',
            indication:'Miscellaneous',price:'$5'
        },
        {
            _id:46,
            name:'Thiotropium',
            indication:'Respiratory drugs            ',price:'$5'
        },
        {
            _id:47,
            name:'Tofen',
            indication:'Cough',price:'$5'
        },
        {
            _id:48,
            name:'Remoo 20',
            indication:'Gastrology',price:'$5'
        },
        {
            _id:49,
            name:'Peracitamol',
            indication:'Fever',price:'$5'
        },
        {
            _id:50,
            name:'Napa',
            indication:'Headache',price:'$5'
        },
    ];
    const [query , setQuery] = useState('');
   
    const search = (medicines)=>{
        return medicines.filter((medicine)=>medicine.name.toLowerCase().includes(query)).slice(0,5)
    }
    return (
        <>
        <div className='m-10 flex justify-center items-center'>
            <h2 className='font-bold text-4xl text-primary'>Find Your Drugs</h2>
            </div>
            <div className='m-10 flex justify-center items-center'>
            <input type="text" placeholder="Search..." className="input input-bordered input-primary w-full max-w-xs" onChange={(e)=>setQuery(e.target.value)}/>
            
           
                </div>
                <MedicineRow medicines={search (medicines)}></MedicineRow>
                </>
    );
};

export default Medicines;