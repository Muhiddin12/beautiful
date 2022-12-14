let upcomMain = document.querySelector('.upcom-main')
let upcomUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1'
fetch(upcomUrl)
    .then((value) => value.json())  
    .then((upcom) => {
        console.log(upcom)
        let upcomArray = upcom.results.slice(0, 11)
        let upcomCont = document.createElement('div')
        upcomCont.className = 'upcom-cont';
        upcomArray.map((item) => {
            console.log(item)

            let upcomItem = document.createElement('div')
            upcomItem.className = 'upcom-item'
            let upcomItemImage = document.createElement('div')
            upcomItemImage.className = 'upcom-item-image'
            let itemImage = document.createElement('img')
            itemImage.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
            let upcomItemBody = document.createElement('div')
            upcomItemBody.className = 'upcom-item-body'
            let h2Body = document.createElement('h2')
            h2Body.textContent = item.title.slice(0, 23);
            let pBody = document.createElement('p')
            pBody.textContent = item.release_date
            let comingP = document.createElement('p')
            comingP.textContent = `Rating : ${item.vote_average}`
            comingP.id = 'comingP';
            upcomItemBody.appendChild(h2Body)
            upcomItemBody.appendChild(pBody)
            upcomItemBody.appendChild(comingP)
            upcomItemImage.appendChild(itemImage)
            upcomItem.appendChild(upcomItemImage)
            upcomItem.appendChild(upcomItemBody)
            upcomCont.appendChild(upcomItem)
            upcomMain.appendChild(upcomCont)
        })
    }
    )

