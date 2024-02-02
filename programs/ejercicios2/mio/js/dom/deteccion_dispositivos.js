const d = document,
n = navigator,
ua = n.userAgent; 

export default function userDeviceInfo(id) {
    //OBJETOS CON EXPRESIONES REGULARES PARA HACER LAS VALIDACIONES
    const $id = d.getElementById(id),
    isMoile = {
        androd: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|pod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.androd() || this.ios() || this.windows(); 
        }
    },
    isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows(); 
        }
    },
    isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            ); 
        }
    }

    // console.log(ua); 
    // console.info(isMoile.androd());
    // console.info(isMoile.ios());
    // console.info(isMoile.any());
    // console.info(isBrowser.any())
    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMoile.any()?isMoile.any():isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `; 

    //CONTENDIO EXCLUSIVO
    if(isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`; 
    }
    if(isDesktop.linux()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para linux</mark></p>`; 
    }
    if(isDesktop.mac()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para MAC OS</mark></p>`; 
    }
    if(isDesktop.windows()) {
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`; 
    }

    //REDIRECCIONES
    if(isMoile.androd()) {
        window.location.href = "https://jonmircha.com"; 
    }

}