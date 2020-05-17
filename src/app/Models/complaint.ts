export class Complaint {
    id:string;
    title:string;
    content:string;
    category:string;    
    createdBy:string;
    createdDate:Date;
    organization:{        
        companyName:string;
        legalName:string;
        website:string;
        address:string;
        pinCode: string;
        country:string;
    }
    
}


export class Category{    
    Value:number;
    Text:string;    
}

export class Country{    
    Value:number;
    Text:string;    
}


