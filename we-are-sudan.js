function Run() {

    function setup() {
        languageSetup()
        nextSetup()
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

    function nextSetup() {
        var inside = document.querySelector('.next-inside')
        var insideButtons = document.querySelectorAll('.location-inside')
        var outside = document.querySelector('.next-outside')
        var outsideButtons = document.querySelectorAll('.location-outside')
        inside.style.display = 'none'
        outside.style.display = 'none'
        arrayFrom(insideButtons).forEach(function (insideButton) {
            insideButton.addEventListener('click', function () {
                outside.style.display = 'none'
                arrayFrom(outsideButtons).forEach(function (outsideButton) {
                    outsideButton.classList.add('unselected')
                })
                arrayFrom(outsideButtons).forEach(function (outsideButton) {
                    outsideButton.classList.remove('selected')
                })
                inside.style.display = ''
                arrayFrom(insideButtons).forEach(function (insideButton) {
                    insideButton.classList.add('selected')
                })
                arrayFrom(insideButtons).forEach(function (insideButton) {
                    insideButton.classList.remove('unselected')
                })
            })
        })
        arrayFrom(outsideButtons).forEach(function (outsideButton) {
            outsideButton.addEventListener('click', function () {
                inside.style.display = 'none'
                arrayFrom(insideButtons).forEach(function (insideButton) {
                    insideButton.classList.add('unselected')
                })
                arrayFrom(insideButtons).forEach(function (insideButton) {
                    insideButton.classList.remove('selected')
                })
                outside.style.display = ''
                arrayFrom(outsideButtons).forEach(function (outsideButton) {
                    outsideButton.classList.add('selected')
                })
                arrayFrom(outsideButtons).forEach(function (outsideButton) {
                    outsideButton.classList.remove('unselected')
                })
            })
        })
    }

    function arrayFrom(nodes) {
        return Array.prototype.slice.call(nodes)
    }

    setup()

}

addEventListener('DOMContentLoaded', Run)
