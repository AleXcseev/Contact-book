export default class PhonebookHillel {
    async getResource (url) {
        const res = await fetch(url);
        return await res.json();
    }

    getCategories () {
        return this.getResource(`http://phonebook.hillel.it/api/categories?`);
    }

    getPhonebook (id) {
        return this.getResource(`http://phonebook.hillel.it/api/phonebook?page=1&limit=25&sort=name&sortValue=1&search=&category=${ id }`)
    }
}

