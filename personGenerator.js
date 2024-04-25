const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вероника",
            "id_2": "Мария",
            "id_3": "Светлана",
            "id_4": "Катерина",
            "id_5": "Жанна",
            "id_6": "Зинаида",
            "id_7": "Ирина",
            "id_8": "Ксения",
            "id_9": "Марина",
            "id_10": "Нина"
        }
    }`,
    patronymicNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Алексеев",
            "id_7": "Михаилов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,
    jobMaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "слесарь",
            "id_2": "солдат",
            "id_3": "шахтер",
            "id_4": "програмист",
            "id_5": "безработный",
            "id_6": "инженер",
            "id_7": "доктор",
            "id_8": "разнорабочий",
            "id_9": "повар",
            "id_10": "дизайнер",
            "id_11": "маляр"
        }
    }`,
    jobFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "програмист",
            "id_2": "инженер",
            "id_3": "доктор",
            "id_4": "швея",
            "id_5": "повар",
            "id_6": "дизайнер",
            "id_7": "маляр",
            "id_8": "домохозяйка",
            "id_9": "художник",
            "id_10": "актриса"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Майя",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function (genders) {
      if(genders===1){ return this.GENDER_MALE }
      else{ return this.GENDER_FEMALE };
    },

    randomFirstName: function (genders) {
        if (genders===1){
        return this.randomValue(this.firstNameMaleJson)}
        else {return this.randomValue(this.firstNameFemaleJson)};
    },

    randomSurname: function (genders) {
        if (genders===1){
            return this.randomValue(this.surnameJson); 
        } else {
        return this.randomValue(this.surnameJson)+"a"};
    },

    randomPatrName: function (genders) {
        if (genders===1){
            return this.randomValue(this.patronymicNameJson)+"ич"; 
        } else {
        return this.randomValue(this.patronymicNameJson)+"нa"};
    },

    randomJob: function (genders) {
        if (genders===1){
            return this.randomValue(this.jobMaleJson); 
        } else {
        return this.randomValue(this.jobFemaleJson)};
    },

    randomMonth: function () {
        return this.randomValue(this.monthJson)
    },


    getPerson: function () {
        const genders = (this.randomIntNumber()===1)?1:0;
        const month = this.randomMonth();
        this.person = {};
        this.person.month = month;
        this.person.bornDate = this.randomIntNumber(2010, 1940);
        this.person.gender = this.randomGender(genders);
        this.person.surName = this.randomSurname(genders);
        this.person.firstName = this.randomFirstName(genders);
        this.person.patrName = this.randomPatrName(genders);
        this.person.job = this.randomJob(genders);
        if (month == "Февраля") {
            this.person.day = this.randomIntNumber(28, 1);
        } else if (month == "Апреля" || month == "Июня" || month == "Сентября" || month == "Ноября") {
            this.person.day = this.randomIntNumber(30, 1);
        }
        else {
            this.person.day = this.randomIntNumber(31, 1);
        }
        return this.person;
    },
};