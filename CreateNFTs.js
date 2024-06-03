/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
 const NFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (type,brand,model,processor,control,ram,rom,price) {
const NFT ={
    "Type":type,
    "Brand_name":brand,
    "Model_Name":model,
    "Processor_Name":processor,
    "Control_Type":control,
    "Ram_capacity":ram,
    "Rom_capacity":rom,
    "Price":price,  
}
NFTs.push(NFT);
console.log("Minted:"+type);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (i=0;i<NFTs.length;i++){
        console.log("\nType:"+NFTs[i].Type);
        console.log("Brand name:"+NFTs[i].Brand_name);
        console.log("Model name:"+NFTs[i].Model_Name);
        console.log("Processor name:"+NFTs[i].Processor_Name);
        console.log("Control type:"+NFTs[i].Control_Type);
        console.log("Ram capecity:"+NFTs[i].Ram_capacity);
        console.log("Rom capecity:"+NFTs[i].Rom_capacity);
        console.log("Price:"+NFTs[i].Price);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nTotal NFT minted are:" + NFTs.length);
}

// call your functions below this line
mintNFT("Laptop","HP","Pavillion-15","Intel i5","Buttons","8 GB","512 GB","Rs 82,999/-");
mintNFT("Laptop","Dell","Inspiron-14","Intel i5","Buttons & Touchscreen","8 GB"," 1 TB","Rs 83,189/-");
mintNFT("Tablet","Apple","Ipad Air ","M2 chip","Touchscreen"," 6 GB","128 GB","Rs 59,900/-");
mintNFT("Tablet","MI","Redmi pad SE","Snapdragon","Touchscreen","6 GB","128 GB","Rs 11,999/-");
mintNFT("DESKTOP","HP","HP All-in-One PC","Intel Pentium","Buttons","8 GB","512 GB","Rs 32,999/-");
mintNFT("Mobile","MI","Redmi Note 9","Snapdragon","Touchscreen","4 GB","64 GB","Rs 11,999/-");
mintNFT("Mobile","Apple","Iphone 13","A14 bionic chip","Touchscreen","4 GB","128 GB","Rs 53,999/-");
listNFTs();
getTotalSupply();
