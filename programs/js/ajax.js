(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

    //PASA POR LOS 4 FASES DE LA PETICIÓN
    //El código solo se ejecuta cuando el readyState es igual a 4
    xhr.addEventListener('readystatechange', e => {
        if (xhr.readyState !== 4) return;

        //MANIPULACION DE UN ERROR
        if (xhr.status >= 200 && xhr.status < 299) {
            // console.log("Éxito");
            // console.log(xhr.responseText); 
            // $xhr.innerHTML = xhr.responseText; 
            // console.log(json); 
            // console.log(xhr); 

            let json = JSON.parse(xhr.responseText);
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            console.log("Error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        // console.log('Este mensaje cargará de cualquier forma');
    });

    // xhr.open('GET', '');

    // Ruta local de archivos json
    xhr.open('GET', 'assets/users.json');

    xhr.send();
})();

(() => {
    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment();

    //finally es para cargar el loader
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // console.log(res);

            //Rechazar la respuesta catch
            return res.ok
                ? res.json()
                : Promise.reject(res);
        })
        .then(json => {
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);

        })
        .catch(err => {
            let message = err.statusText || 'Ocurrió un error';
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(
        // console.log('Esto se ejecutará independientemente del resultado de la Promesa Fetch')
    );
})();

(() => {
    const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            // fetch('https://jsonplaceholder.typicode.com/users')
            let res = await fetch('https://jsonplaceholder.typicode.com/users'), json = await res.json();

            //Podemos haceru un hilo de error
            // if (!res.ok) throw new Error(`Ocurrio un Error al solicitar los Datos`); 
            if (!res.ok) throw { status: res.status, statusText: res.statusText };

            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (err) {
            let message = err.statusText || 'Ocurrió un error';
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {

        }
    }
    getData();
})();

(() => {
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            let json = res.data;
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
        .catch(err => {
            let message = err.response.statusText || 'Ocurrió un error';
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            // console.log('Esto se ejecutará independientemente del resultado Axios')
        });
})();

(() => {
    const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();

    // axios.get('https://jsonplaceholder.typicode.com/users')

    async function getData() {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users'), json = await res.data;
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log(err); 
            let message = err.response.statusText || 'Ocurrió un error';
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log('Esto se ejecutará independientemente del try-catch'); 
        }
        
    }
    getData(); 
})(); 
