
import { NextApiRequest, NextApiResponse } from 'next';

const baseURL = process.env.BASE_URL + process.env.API_KEY;

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {


    const response = await fetch(baseURL);



    //expepected res json is items array with objects with properties: dcDescriptionLangAware, guid, year, type  I want to sort by type  and return only the items array
    
    
    const data = await response.json();
    const filteredDataVID = data.items.filter(item => item.type === 'VIDEO');
    const filteredDataIMG = data.items.filter(item => item.type === 'IMAGE');
    
    const dataVID = filteredDataVID.map(item => ({
        dcDescriptionLangAware: item.dcDescriptionLangAware,
        guid: item.guid,
        year: item.year[0],
        type: item.type
    }));
    
    const dataIMG = filteredDataIMG.map(item => ({
        edmIsShownBy: item.edmIsShownBy,
        guid: item.guid,
        year: item.year,
        type: item.type,
        title: Array.isArray(item.title) ? item.title[0].replace(/\[|\]/g, '') : item.title.replace(/\[|\]/g, '')
    }));
    
    const combinedData = {
        apikey: data.apikey,
        success: data.success,
        requestNumber: data.requestNumber,
        itemsCount: data.itemsCount,
        totalResults: data.totalResults,
        dataVID,
        dataIMG
    };
    
   
    res.status(200).json(combinedData);
};

export default searchHandler;