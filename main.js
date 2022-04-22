const linksSocialMedia = {
  github: 'eduardopalricas',
  youtube:'Rocketseat',
  instagram:'eduardo_cardoso33',
  facebook:'eduardo.palricas',
  twitter:'_Edu33_'
}   

function changeSocialMediaLinks(){
for(let li of sociallinks.children){
  const social = li.getAttribute('class')
  li.children[0].href =`https://www.${social}.com/${linksSocialMedia[social]}`

}
}
changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then( data =>{
        name1.textContent = data.name
        name2.textContent = data.name
        img.src = data.avatar_url
        bio.textContent = data.bio 
        linkusergit.href = data.html_url
      })
}

getGithubProfileInfos()