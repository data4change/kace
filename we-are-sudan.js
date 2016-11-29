function Run() {

    function setup() {
        languageSetup()
    }

    function languageSetup() {
        var langs = ['en', 'ar']
        var langAddress = window.location.hash.substring(1)
        var langBrowser = navigator.language.substring(0, 2)
        if (langs.indexOf(langAddress) < 0) {
            history.replaceState({}, '', '#' + langBrowser)
        }
        document.querySelector('.use-en').addEventListener('click', function () { languageSet('en') })
        document.querySelector('.use-ar').addEventListener('click', function () { languageSet('ar') })
        languageSet(langAddress || langBrowser)
    }

    function languageSet(lang) {
        document.documentElement.lang = lang
        var thisLangText = document.querySelectorAll('[lang=' + lang + '], .use:not(.use-' + lang + ')')
        var otherLangText = document.querySelectorAll('[lang]:not([lang=' + lang + ']), .use-' + lang)
        arrayFrom(thisLangText).forEach(function (element) {
            element.style.display = ''
        })
        arrayFrom(otherLangText).forEach(function (element) {
            element.style.display = 'none'
        })
    }

    function arrayFrom(nodes) {
        return Array.prototype.slice.call(nodes)
    }

    setup()

}

addEventListener('DOMContentLoaded', Run)
