 const lyrics ="amr sonar bangla ami tomay valobashi";
 console.log(lyrics)
 //const strinGSearch ='bangla';
 const strinGSearch ='Bangla';
 //console.log(lyrics.includes(strinGSearch))
 const searchFalseLowercase =lyrics.toLowerCase().includes(strinGSearch)
 const searchTrueLowercase =lyrics.toLowerCase().includes(strinGSearch.toLowerCase())
 console.log(searchTrueLowercase)
 console.log(searchFalseLowercase)
 console.log(lyrics.indexOf('ami'))
 if(lyrics.indexOf('tomy')!==-1){
    console.log("it's exist")
 }else{
    console.log("it's not exist")
 }
 console.log(lyrics.startsWith('amr'))
 console.log(lyrics.endsWith('amr'))
 console.log(lyrics.endsWith('valobashi'))
