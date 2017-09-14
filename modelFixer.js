let fs = require('fs')

let groups = [
    {
        "_id": "1A",
        "name": "1A",
        "description": "",
        "students": [{
            "name": "Adam",
            "id": 0,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "2", "second": "4"}
            }, {"name": "Presentation", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": "4"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": "-"}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Galon",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "absent"
            }, {"date": "21.03", "status": "absent"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Krystian",
            "id": 1,
            "tests": [{"name": "Uni", "marks": {"first": "5"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": "-"}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": "-"}],
            "surname": "Kobus",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Marcin",
            "id": 2,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": "4.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": "-"}, {"date": "23.05", "status": ""}],
            "surname": "Kwaśniak",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Bartłomiej",
            "id": 3,
            "tests": [{"name": "Uni", "marks": {"first": "3"}}, {
                "name": "Presentation",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": "-"}, {"date": "23.05", "status": "-"}],
            "surname": "Pieła",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Michał",
            "id": 4,
            "tests": [{"name": "Uni", "marks": {"first": "3"}}, {
                "name": "Presentation",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": "-"
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Pacanowski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "absent"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Dominik",
            "id": 5,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": "4.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": "-"
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Raczkowski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Bartosz",
            "id": 6,
            "tests": [{"name": "Uni", "marks": {"first": "3"}}, {"name": "", "marks": {"first": "3.5"}}, {
                "name": "",
                "marks": {"first": "2", "second": "4"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "3.5", "second": null}
            }],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Ruszel",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "justified"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "absent"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Sebastian",
            "id": 7,
            "tests": [{"name": "Uni", "marks": {"first": "3"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": "-"
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Sobociński",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "justified"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "justified"
            }, {"date": "11.04", "status": "justified"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "absent"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Kamil",
            "id": 8,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "28.03", "status": ""}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Zając",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Tomasz",
            "id": 9,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "", "marks": {"first": "3"}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "28.03", "status": "-"}, {"date": "28.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "16.05", "status": ""}, {"date": "23.05", "status": ""}],
            "surname": "Niedźwiedź",
            "attendances": [{"date": "07.03", "status": "absent"}, {
                "date": "14.03",
                "status": "absent"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "justified"}, {"date": "12.05", "status": "justified"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }],
        "password": "wsei1A",
        "dateOfActivities": "Wtorek"
    },
    {
        "_id": "1B",
        "name": "1B",
        "description": "",
        "students": [{
            "name": "Przemysław",
            "id": 0,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "4", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Adamczyk",
            "attendances": [{"date": "07.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Karin",
            "id": 1,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "5.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": "-"}],
            "surname": "Asatryan",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Marcin",
            "id": 2,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": "4"}}, {
                "name": "",
                "marks": {"first": "2", "second": "3.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "3.0", "second": null}}],
            "homework": [{"date": "21.03", "status": "-"}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": "-"
            }, {"date": "11.04", "status": "-"}, {"date": "25.04", "status": "-"}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": "-"}],
            "surname": "Batko",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Martha",
            "id": 3,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": "5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "5.0", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Badzińska",
            "attendances": [{"date": "13.03", "status": "justified"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Szymon",
            "id": 4,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": "3.5"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": "4"}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "3.0", "second": null}}],
            "homework": [{"date": "21.03", "status": "-"}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Broniszewski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "justified"}, {
                "date": "28.04",
                "status": "justified"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "absent"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Karol",
            "id": 5,
            "tests": [{"name": "", "marks": {"first": "2"}}, {"name": "", "marks": {"first": "4"}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": "-"
            }, {"date": "23.05", "status": ""}],
            "surname": "Bronowski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "justified"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "justified"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Damian",
            "id": 6,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "", "marks": {"first": "2"}}, {"name": "", "marks": {"first": "3.5"}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": "-"}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Dąbikiewicz",
            "attendances": [{"date": "13.03", "status": "absent"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "absent"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "absent"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "absent"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "absent"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "absent"}]
        }, {
            "name": "Marta",
            "id": 7,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "5.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Gejdel",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "justified"
            }, {"date": "19.05", "status": "justified"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Miłosz",
            "id": 8,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": "-"}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": "-"}],
            "surname": "Klecha",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "justified"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "justified"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Gabriela",
            "id": 9,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "",
                "marks": {"first": "4.5"}
            }, {"name": "", "marks": {"first": "4.5"}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Oskroba",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "absent"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Piotr",
            "id": 10,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": "-"}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": "-"
            }, {"date": "23.05", "status": "-"}],
            "surname": "Stanik",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "absent"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Damian",
            "id": 11,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Wójcik",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "justified"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "absent"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Dominik",
            "id": 12,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0"}}, {
                "name": "",
                "marks": {"first": "2.0", "second": "3.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Final Mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "21.03", "status": "-"}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": "-"
            }, {"date": "11.04", "status": "-"}, {"date": "25.04", "status": "-"}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": "-"}],
            "surname": "Zawartka",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Jakub",
            "id": 13,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final Mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "28.03",
                "status": ""
            }, {"date": "11.04", "status": ""}, {"date": "25.04", "status": ""}, {
                "date": "09.05",
                "status": ""
            }, {"date": "23.05", "status": ""}],
            "surname": "Ziejewski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "absent"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "absent"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }],
        "password": "wsei1B",
        "dateOfActivities": "Wtorek"
    },
    {
        "_id": "1C",
        "name": "1C",
        "description": "",
        "students": [{
            "name": "Dawid",
            "id": 0,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Presentation", "marks": {"first": "4.5"}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "5.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": "-"}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": "-"}],
            "surname": "Pszeniczny",
            "attendances": [{"date": "07.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Mateusz",
            "id": 1,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Prese",
                "marks": {"first": "4.5"}
            }, {"name": "", "marks": {"first": 0}}, {"name": "", "marks": {"first": 0}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Rudnicki",
            "attendances": [{"date": "07.03", "status": "absent"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "absent"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "absent"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "absent"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "absent"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "absent"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "absent"}]
        }, {
            "name": "Szymon",
            "id": 2,
            "tests": [{"name": "", "marks": {"first": "3"}}, {"name": "Prese", "marks": {"first": "5"}}, {
                "name": "",
                "marks": {"first": "3.5"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Przybyszewski",
            "attendances": [{"date": "07.03", "status": "present"}, {
                "date": "14.03",
                "status": "justified"
            }, {"date": "21.03", "status": "justified"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "justified"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "absent"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Maciej",
            "id": 3,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "5.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Celewski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "absent"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "absent"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Kamil",
            "id": 4,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Prese",
                "marks": {"first": "4.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": "-"}],
            "surname": "Chowaniec",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Jakub",
            "id": 5,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Tabor",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Artur",
            "id": 6,
            "tests": [{
                "name": "Unit 1",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Presentation", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "5.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Lachor",
            "attendances": [{"date": "13.03", "status": "justified"}, {
                "date": "14.03",
                "status": "justified"
            }, {"date": "21.03", "status": "justified"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "justified"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Filip",
            "id": 7,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Prese",
                "marks": {"first": "5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "21.03", "status": "-"}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Wilczura",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "justified"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Jakub",
            "id": 8,
            "tests": [{"name": "", "marks": {"first": 0}}, {"name": "Prese", "marks": {"first": 0}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "", "marks": {"first": 0}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Czajor",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "absent"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "absent"}, {"date": "25.04", "status": "absent"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "absent"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "absent"
            }, {"date": "19.05", "status": "absent"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "absent"
            }, {"date": "30.05", "status": "absent"}]
        }, {
            "name": "Maciej",
            "id": 9,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Prese",
                "marks": {"first": "5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": "-"
            }, {"date": "09.05", "status": "-"}],
            "surname": "Zamorski",
            "attendances": [{"date": "13.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "justified"}, {
                "date": "04.04",
                "status": "absent"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "absent"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "present"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "present"}]
        }, {
            "name": "Mateusz",
            "id": 10,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": "3"}}, {
                "name": "Prese",
                "marks": {"first": "4.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "21.03", "status": ""}, {"date": "28.03", "status": ""}, {
                "date": "25.04",
                "status": ""
            }, {"date": "09.05", "status": ""}],
            "surname": "Dudek",
            "attendances": [{"date": "07.03", "status": "present"}, {
                "date": "14.03",
                "status": "present"
            }, {"date": "21.03", "status": "present"}, {"date": "28.03", "status": "present"}, {
                "date": "04.04",
                "status": "present"
            }, {"date": "11.04", "status": "present"}, {"date": "25.04", "status": "present"}, {
                "date": "28.04",
                "status": "present"
            }, {"date": "09.05", "status": "present"}, {"date": "12.05", "status": "absent"}, {
                "date": "16.05",
                "status": "present"
            }, {"date": "19.05", "status": "present"}, {"date": "23.05", "status": "present"}, {
                "date": "26.05",
                "status": "present"
            }, {"date": "30.05", "status": "absent"}]
        }],
        "password": "wsei1C",
        "dateOfActivities": "Wtorek"
    },
    {
        "_id": "2A",
        "name": "2A",
        "description": "",
        "students": [{
            "name": "Justyna",
            "id": 0,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"first": "4"}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Bazgier",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Kateryna",
            "id": 1,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Dotsenko",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Łukasz",
            "id": 2,
            "tests": [{"name": "", "marks": {"first": "4.5"}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "",
                "marks": {"first": "3.5"}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Janda",
            "attendances": [{"date": "01.03", "status": "justified"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "justified"}, {
                "date": "29.03",
                "status": "justified"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Kamil",
            "id": 3,
            "tests": [{"name": "", "marks": {"first": "3.5"}}, {"name": "", "marks": {"first": "4"}}, {
                "name": "Unit 3",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Unit 4", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": "-"}, {"date": "17.05", "status": ""}],
            "surname": "Józefko",
            "attendances": [{"date": "01.03", "status": "justified"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "absent"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "absent"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Aleksi",
            "id": 4,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": "-"}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": "-"}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": "-"
            }, {"date": "19.04", "status": "-"}, {"date": "17.05", "status": "-"}],
            "surname": "Katona",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Dawid",
            "id": 5,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": "-"}],
            "surname": "Kobos",
            "attendances": [{"date": "01.03", "status": "absent"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Vladyslav ",
            "id": 6,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": "-"
            }, {"date": "29.03", "status": "-"}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": "-"}],
            "surname": "Kucher",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "absent"
            }, {"date": "15.03", "status": "absent"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Michał ",
            "id": 7,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "",
                "marks": {"first": "3"}
            }, {"name": "", "marks": {"first": "4.5"}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": "-"}, {
                "date": "22.03",
                "status": "-"
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": "-"}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": "-"}, {"date": "17.05", "status": ""}],
            "surname": "Majcher",
            "attendances": [{"date": "01.03", "status": "justified"}, {
                "date": "08.03",
                "status": "absent"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "absent"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "justified"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "justified"}, {"date": "10.05", "status": "justified"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Paweł ",
            "id": 8,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Mocny",
            "attendances": [{"date": "01.03", "status": "absent"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "absent"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "justified"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Żaneta ",
            "id": 9,
            "tests": [{"name": "", "marks": {"first": "3"}}, {"name": "", "marks": {"first": "3.5"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Unit 4", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": "-"}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": "-"}],
            "surname": "Nazar",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "justified"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "justified"}, {"date": "12.04", "status": "absent"}, {
                "date": "19.04",
                "status": "justified"
            }, {"date": "26.04", "status": "justified"}, {"date": "10.05", "status": "justified"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Wojciech",
            "id": 10,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Papież",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "absent"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "absent"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Natalia ",
            "id": 11,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": "5"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": "-"}],
            "surname": "Piechnik",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "absent"
            }, {"date": "05.04", "status": "justified"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Dymytro",
            "id": 12,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": "5"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": "-"}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Poliakov",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "absent"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Dorian",
            "id": 13,
            "tests": [{"name": "", "marks": {"first": "4"}}, {"name": "", "marks": {"first": "4"}}, {
                "name": "",
                "marks": {"first": "3.5"}
            }, {"name": "Unit 4", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "3.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": "-"}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": "-"}],
            "surname": "Solnica",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "absent"}, {"date": "22.03", "status": "absent"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "justified"}, {"date": "12.04", "status": "justified"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "justified"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Veronika",
            "id": 14,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": "4"}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": "4.5"}
            }, {"name": "Unit 3", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Tsiatko",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Joanna",
            "id": 15,
            "tests": [{"name": "Unit 1", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "", "marks": {"first": "5"}}, {
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "15.03", "status": ""}, {
                "date": "22.03",
                "status": ""
            }, {"date": "29.03", "status": ""}, {"date": "05.04", "status": ""}, {
                "date": "12.04",
                "status": ""
            }, {"date": "19.04", "status": ""}, {"date": "17.05", "status": ""}],
            "surname": "Ziętara",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "justified"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "absent"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }],
        "password": "wsei2A",
        "dateOfActivities": "Środa"
    },
    {
        "_id": "2B",
        "name": "2B",
        "description": "",
        "students": [{
            "name": "Mariusz",
            "id": 0,
            "tests": [{"name": "Unit 11,12", "marks": {"first": "4"}}, {
                "name": "Business 11-14",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Unit 1", "marks": {"third": null, "first": "0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": "-"
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": "-"
            }, {"date": "24.05", "status": "-"}],
            "surname": "Hombek",
            "attendances": [{"date": "01.03", "status": "absent"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "absent"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Patrycja",
            "id": 1,
            "tests": [{
                "name": "Unit 11,12",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business 11-14", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 1",
                "marks": {"third": "4.5", "first": "2.0", "second": "2"}
            }, {"name": "Unit 2", "marks": {"third": "3", "first": "2.0", "second": "2"}}, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "", "marks": {"first": "3"}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": "-"
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": "-"}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Homoncik",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Victoria",
            "id": 2,
            "tests": [{
                "name": "Unit 11,12",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business 11-14", "marks": {"third": null, "first": "2.0", "second": "3"}}, {
                "name": "Unit 1",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Unit 2", "marks": {"third": "4", "first": "2.0", "second": "2"}}, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "", "marks": {"first": "3"}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": "-"
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Jabłońska",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Katarzyna",
            "id": 3,
            "tests": [{
                "name": "Unit 11,12",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Business 11-14", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 1",
                "marks": {"third": null, "first": "2.0", "second": "4"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": "2"}}, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "", "marks": {"first": "2"}}],
            "homework": [{"date": "15.03", "status": "-"}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": "-"}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Nowak",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Adrianna",
            "id": 4,
            "tests": [{"name": "Unit 11,12", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "",
                "marks": {"first": "3"}
            }, {"name": "Unit 1", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": "3"}
            }, {"name": "", "marks": {"first": "3"}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": "3.5"}
            }],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": "+"}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": "-"}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": ""}],
            "surname": "Strugała",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "justified"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "justified"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "justified"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Oliwia ",
            "id": 5,
            "tests": [{"name": "Unit 11,12", "marks": {"third": null, "first": "2.0", "second": "5"}}, {
                "name": "",
                "marks": {"first": "4.5"}
            }, {"name": "Unit 1", "marks": {"third": null, "first": "2.0", "second": "4"}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": "+"}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Szpak",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "absent"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Violetta",
            "id": 6,
            "tests": [{
                "name": "Unit 11,12",
                "marks": {"third": null, "first": "2.0", "second": "4.5"}
            }, {"name": "Business 11-14", "marks": {"third": null, "first": "2.0", "second": "4.5"}}, {
                "name": "Unit 1",
                "marks": {"third": null, "first": "2.0", "second": "5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": "5"}}, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": "-"}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Szturc",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "absent"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Anna ",
            "id": 7,
            "tests": [{"name": "Unit 11,12", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "", "marks": {"first": 0}}, {"name": "", "marks": {"first": 0}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "Final mark", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": ""}],
            "surname": "Strzelecka",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "absent"
            }, {"date": "15.03", "status": "absent"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "absent"
            }, {"date": "05.04", "status": "absent"}, {"date": "12.04", "status": "absent"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Katarzyna",
            "id": 8,
            "tests": [{
                "name": "Unit 11,12",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business 11-14", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 1",
                "marks": {"third": null, "first": "2.0", "second": "4.5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "15.03", "status": ""}, {"date": "22.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": ""}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Sęk",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Marek",
            "id": 9,
            "tests": [{
                "name": "Unit 11,12",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business 11-14", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": "2"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": "2"}}, {
                "name": "Business 15-18",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "", "marks": {"first": "2"}}],
            "homework": [{"date": "15.03", "status": "-"}, {"date": "22.03", "status": "+"}, {
                "date": "05.04",
                "status": "-"
            }, {"date": "12.04", "status": ""}, {"date": "10.05", "status": "-"}, {
                "date": "10.05",
                "status": ""
            }, {"date": "24.05", "status": "-"}],
            "surname": "Stasiowski",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "absent"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Agata",
            "id": 10,
            "tests": [{"marks": {"first": 0}}, {"marks": {"first": 0}}, {"marks": {"first": "2"}}, {
                "name": "",
                "marks": {"first": "2"}
            }, {"name": "", "marks": {"first": 0}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "10.05", "status": ""}, {"date": "10.05", "status": ""}, {
                "date": "24.05",
                "status": ""
            }],
            "surname": "Kilianek",
            "attendances": [{"date": "01.03", "status": "absent"}, {
                "date": "08.03",
                "status": "absent"
            }, {"date": "15.03", "status": "absent"}, {"date": "22.03", "status": "absent"}, {
                "date": "29.03",
                "status": "absent"
            }, {"date": "05.04", "status": "absent"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "absent"}]
        }],
        "password": "wsei2B",
        "dateOfActivities": "Środa"
    },
    {
        "_id": "2C",
        "name": "2C",
        "description": "",
        "students": [{
            "name": "Szymon",
            "id": 0,
            "tests": [{
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 5",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Bąkowski",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Jaromir",
            "id": 1,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "2.0", "second": "4.5"}}, {
                "name": "",
                "marks": {"first": "5"}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": "-"}, {"date": "24.05", "status": ""}],
            "surname": "Bojenko",
            "attendances": [{"date": "01.03", "status": "justified"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Katarzyna",
            "id": 2,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Jakubik",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Jakub",
            "id": 3,
            "tests": [{"name": "", "marks": {"first": "4"}}, {"name": "", "marks": {"first": "5"}}, {
                "name": "Unit 5",
                "marks": {"third": null, "first": "2.0", "second": "3"}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Final mark", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": "-"}],
            "surname": "Kubina",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "justified"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "justified"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Katarzyna",
            "id": 4,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "5.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Książek",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Radosław ",
            "id": 5,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": "4.5"}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "2.0", "second": "2"}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "2.0", "second": "5"}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": "-"}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": "-"}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Krowicki",
            "attendances": [{"date": "01.03", "status": "justified"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "justified"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "absent"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Tomasz",
            "id": 6,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "", "marks": {"first": "3"}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "", "marks": {"first": "3"}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "3.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": "-"}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Krawczyk",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "justified"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "justified"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Piotr",
            "id": 7,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "2.0", "second": "4"}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": "-"}],
            "surname": "Maćkowski",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Aleksandr",
            "id": 8,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "3"}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "2.0", "second": "3"}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "3.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Petukhov",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Dominika",
            "id": 9,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "5"}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Pokusa",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "justified"
            }, {"date": "26.04", "status": "justified"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Marek",
            "id": 10,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Rosa",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Marek",
            "id": 11,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "", "marks": {"first": "4"}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.5", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": "-"}],
            "surname": "Woźniak",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "absent"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "present"}]
        }, {
            "name": "Jan ",
            "id": 12,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "2.0", "second": "4.5"}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "4.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": ""}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": "-"}],
            "surname": "Wójcicki",
            "attendances": [{"date": "01.03", "status": "present"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "present"
            }, {"date": "26.04", "status": "present"}, {"date": "10.05", "status": "justified"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Dominik",
            "id": 13,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "2.0", "second": "3"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "2.0", "second": "4"}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": ""
            }, {"date": "12.04", "status": "-"}, {"date": "17.05", "status": ""}, {"date": "24.05", "status": ""}],
            "surname": "Kotlarczyk",
            "attendances": [{"date": "01.03", "status": "justified"}, {
                "date": "08.03",
                "status": "present"
            }, {"date": "15.03", "status": "present"}, {"date": "22.03", "status": "absent"}, {
                "date": "29.03",
                "status": "absent"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "present"}, {
                "date": "17.05",
                "status": "absent"
            }, {"date": "24.05", "status": "absent"}, {"date": "31.05", "status": "absent"}]
        }, {
            "name": "Filip",
            "id": 14,
            "tests": [{"marks": {"first": 0}}, {
                "name": "",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "2.0", "second": null}}, {
                "name": "Final mark",
                "marks": {"third": null, "first": "2.0", "second": null}
            }],
            "homework": [{"date": "13.03", "status": ""}, {"date": "29.03", "status": ""}, {
                "date": "05.04",
                "status": "-"
            }, {"date": "12.04", "status": "-"}, {"date": "17.05", "status": "-"}, {"date": "24.05", "status": "-"}],
            "surname": "Opyd",
            "attendances": [{"date": "01.03", "status": "absent"}, {
                "date": "08.03",
                "status": "absent"
            }, {"date": "15.03", "status": "absent"}, {"date": "22.03", "status": "present"}, {
                "date": "29.03",
                "status": "present"
            }, {"date": "05.04", "status": "present"}, {"date": "12.04", "status": "present"}, {
                "date": "19.04",
                "status": "absent"
            }, {"date": "26.04", "status": "absent"}, {"date": "10.05", "status": "absent"}, {
                "date": "17.05",
                "status": "present"
            }, {"date": "24.05", "status": "present"}, {"date": "31.05", "status": "absent"}]
        }],
        "password": "wsei2C",
        "dateOfActivities": "Środa"
    },
    {
        "_id": "3A",
        "name": "3A",
        "description": "",
        "students": [{
            "name": "Joanna",
            "id": 0,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Banach",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "present"}, {"date": "27.04", "status": "present"}, {
                "date": "18.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Daria",
            "id": 1,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": "3.5"}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Brylova",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Karol ",
            "id": 2,
            "tests": [{"name": "", "marks": {"first": "3.5"}}, {"name": "", "marks": {"first": "5"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": "-"}, {
                "date": "30.03",
                "status": "-"
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": "-"}, {"date": "04.05", "status": ""}],
            "surname": "Cichoń",
            "attendances": [{"date": "02.03", "status": "justified"}, {
                "date": "09.03",
                "status": "justified"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "absent"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "justified"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "justified"
            }, {"date": "11.05", "status": "justified"}, {"date": "18.05", "status": "absent"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Agnieszka",
            "id": 3,
            "tests": [{"name": "", "marks": {"first": "3.5"}}, {
                "name": "Business/IT ",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "", "marks": {"first": "2", "second": "3"}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Chowaniec",
            "attendances": [{"date": "02.03", "status": "justified"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "justified"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "absent"
            }, {"date": "11.05", "status": "absent"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Adrian",
            "id": 4,
            "tests": [{"name": "", "marks": {"first": "2", "second": "4"}}, {
                "name": "Business/IT ",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "2.0", "second": "3"}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": "-"
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": "-"}, {"date": "04.05", "status": ""}],
            "surname": "Kopciński",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "absent"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Jerzy ",
            "id": 5,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "2.0", "second": "4"}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "2.0", "second": "5"}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": "-"}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": "-"}, {"date": "04.05", "status": "-"}],
            "surname": "Kołakowski",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "justified"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Daniel",
            "id": 6,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": "-"}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": "-"}],
            "surname": "Kocjan",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "absent"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "absent"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "absent"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "absent"}, {"date": "18.05", "status": "absent"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Patrycja ",
            "id": 7,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "2.0", "second": "4.5"}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Laskowska",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "justified"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Pola",
            "id": 8,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "",
                "marks": {"first": "4.5"}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Rachuna",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "absent"}, {
                "date": "04.05",
                "status": "absent"
            }, {"date": "11.05", "status": "justified"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "justified"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Magdalena",
            "id": 9,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "2.0", "second": "5"}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Wąsek",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "absent"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Adrian",
            "id": 10,
            "tests": [{"name": "Unit 10", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "5"}
            }, {"name": "Unit 2", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "2.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": "-"}, {"date": "04.05", "status": ""}],
            "surname": "Woźniczko",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "absent"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Marcin ",
            "id": 11,
            "tests": [{"name": "", "marks": {"first": "2"}}, {
                "name": "Business/IT ",
                "marks": {"third": null, "first": "2.0", "second": "3"}
            }, {"name": "", "marks": {"first": "2"}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "2.0", "second": "3"}
            }, {"name": "", "marks": {"first": 0}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": "-"}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Skraba",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "absent"}, {
                "date": "30.03",
                "status": "absent"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "absent"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Aneta",
            "id": 12,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "Unit 2",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Matula",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "present"
            }, {"date": "11.05", "status": "absent"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Szymon",
            "id": 13,
            "tests": [{
                "name": "Unit 10",
                "marks": {"third": null, "first": "2.0", "second": "5"}
            }, {"name": "Business/IT ", "marks": {"third": null, "first": "5.0", "second": null}}, {
                "name": "",
                "marks": {"first": "3.5"}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": "-"
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": "-"}, {"date": "04.05", "status": ""}],
            "surname": "Koprek",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "absent"
            }, {"date": "11.05", "status": "absent"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Kamil",
            "id": 14,
            "tests": [{"name": "", "marks": {"first": "2", "second": "0"}}, {
                "name": "Business/IT ",
                "marks": {"third": null, "first": "2.0", "second": "3"}
            }, {"name": "", "marks": {"first": "2"}}, {"name": "", "marks": {"first": "2"}}, {
                "name": "",
                "marks": {"first": 0}
            }],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": "-"
            }, {"date": "06.04", "status": "-"}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Caba",
            "attendances": [{"date": "02.03", "status": "absent"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "absent"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "04.05",
                "status": "absent"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "absent"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "absent"}]
        }, {
            "name": "Karol",
            "id": 15,
            "tests": [{"name": "Unit 10", "marks": {"third": null, "first": "2.0", "second": "2"}}, {
                "name": "",
                "marks": {"first": "3"}
            }, {"name": "", "marks": {"first": "2"}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "2.0", "second": null}
            }, {"name": "", "marks": {"first": 0}}],
            "homework": [{"date": "09.03", "status": ""}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Kossowski",
            "attendances": [{"date": "02.03", "status": "justified"}, {
                "date": "09.03",
                "status": "absent"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "absent"
            }, {"date": "06.04", "status": "absent"}, {"date": "20.04", "status": "absent"}, {
                "date": "04.05",
                "status": "justified"
            }, {"date": "11.05", "status": "present"}, {"date": "18.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Aleksandra",
            "id": 16,
            "tests": [{"marks": {"first": "3.5"}}, {"name": "", "marks": {"first": 0}}, {
                "name": "",
                "marks": {"first": "3"}
            }, {"name": "Business/IT", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "",
                "marks": {"first": 0}
            }],
            "homework": [{"date": "09.03", "status": ""}, {"date": "16.03", "status": ""}, {
                "date": "30.03",
                "status": ""
            }, {"date": "06.04", "status": ""}, {"date": "20.04", "status": ""}, {"date": "04.05", "status": ""}],
            "surname": "Korzonkiewicz",
            "attendances": [{"date": "02.03", "status": "absent"}, {
                "date": "09.03",
                "status": "absent"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "absent"}, {"date": "20.04", "status": "absent"}, {
                "date": "04.05",
                "status": "absent"
            }, {"date": "11.05", "status": "absent"}, {"date": "18.05", "status": "absent"}, {
                "date": "21.05",
                "status": "absent"
            }, {"date": "25.05", "status": "present"}]
        }],
        "password": "wsei3A",
        "dateOfActivities": "Czwartek"
    },
    {
        "_id": "3B",
        "name": "3B",
        "description": "",
        "students": [{
            "name": "Sebastian",
            "id": 0,
            "tests": [{
                "name": "Unit 4",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Business/IT", "marks": {"first": "5"}}, {
                "name": "Unit 5",
                "marks": {"third": null, "first": "2", "second": "3"}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": ""
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": "-"}, {
                "date": "04.05",
                "status": ""
            }, {"date": "11.05", "status": ""}],
            "surname": "Grabiński",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "justified"
            }, {"date": "06.04", "status": "absent"}, {"date": "20.04", "status": "present"}, {
                "date": "27.04",
                "status": "present"
            }, {"date": "04.05", "status": "absent"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Paweł",
            "id": 1,
            "tests": [{
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "IT/Business ", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Unit 5",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": ""
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": "-"}, {
                "date": "04.05",
                "status": ""
            }, {"date": "11.05", "status": ""}],
            "surname": "Grondal",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "present"}, {
                "date": "27.04",
                "status": "present"
            }, {"date": "04.05", "status": "justified"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Tatiana",
            "id": 2,
            "tests": [{
                "name": "Unit 4",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "IT/Business ", "marks": {"third": null, "first": "4.5", "second": null}}, {
                "name": "Unit 5",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "2.0", "second": "5"}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": ""
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": ""}, {
                "date": "04.05",
                "status": ""
            }, {"date": "11.05", "status": "-"}],
            "surname": "Korostaszowa",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "justified"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "justified"}, {
                "date": "27.04",
                "status": "absent"
            }, {"date": "04.05", "status": "absent"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Tomasz ",
            "id": 3,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "3.5"}
            }, {"name": "", "marks": {"first": "3"}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": ""
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": "-"}, {
                "date": "04.05",
                "status": ""
            }, {"date": "11.05", "status": "-"}],
            "surname": "Matusik",
            "attendances": [{"date": "02.03", "status": "justified"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "absent"
            }, {"date": "06.04", "status": "absent"}, {"date": "20.04", "status": "present"}, {
                "date": "27.04",
                "status": "present"
            }, {"date": "04.05", "status": "present"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Mateusz ",
            "id": 4,
            "tests": [{"name": "", "marks": {"first": "4"}}, {
                "name": "IT/Business ",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "Unit 5", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "Unit 6",
                "marks": {"third": null, "first": "4.5", "second": null}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "4.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": "-"}, {
                "date": "23.03",
                "status": ""
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": ""}, {
                "date": "04.05",
                "status": "-"
            }, {"date": "11.05", "status": ""}],
            "surname": "Mazgaj",
            "attendances": [{"date": "02.03", "status": "justified"}, {
                "date": "09.03",
                "status": "justified"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "justified"}, {
                "date": "27.04",
                "status": "absent"
            }, {"date": "04.05", "status": "present"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Sebastian",
            "id": 5,
            "tests": [{"name": "Unit 4", "marks": {"third": null, "first": "3.0", "second": null}}, {
                "name": "",
                "marks": {"first": "3.5"}
            }, {"name": "", "marks": {"first": "2", "second": "4"}}, {
                "name": "",
                "marks": {"first": "4"}
            }, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "3.5", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": "-"
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": ""}, {
                "date": "04.05",
                "status": ""
            }, {"date": "11.05", "status": ""}],
            "surname": "Mieszczańczyk",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "absent"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "justified"}, {"date": "20.04", "status": "present"}, {
                "date": "27.04",
                "status": "justified"
            }, {"date": "04.05", "status": "present"}, {"date": "11.05", "status": "justified"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Mateusz",
            "id": 6,
            "tests": [{
                "name": "Unit 4",
                "marks": {"third": null, "first": "3.5", "second": null}
            }, {"name": "IT/Business ", "marks": {"third": null, "first": "3.5", "second": null}}, {
                "name": "Unit 5",
                "marks": {"third": null, "first": "3.0", "second": null}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "5.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "-"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": "-"
            }, {"date": "30.03", "status": ""}, {"date": "27.04", "status": ""}, {
                "date": "04.05",
                "status": "-"
            }, {"date": "11.05", "status": ""}],
            "surname": "Salawa",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "present"
            }, {"date": "16.03", "status": "justified"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "present"}, {"date": "20.04", "status": "absent"}, {
                "date": "27.04",
                "status": "absent"
            }, {"date": "04.05", "status": "present"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }, {
            "name": "Marcin",
            "id": 7,
            "tests": [{"name": "", "marks": {"first": "4"}}, {"name": "", "marks": {"first": "3"}}, {
                "name": "",
                "marks": {"first": "2", "second": "3"}
            }, {"name": "Unit 6", "marks": {"third": null, "first": "4.0", "second": null}}, {
                "name": "Business/IT",
                "marks": {"third": null, "first": "4.0", "second": null}
            }, {"name": "Written exam", "marks": {"third": null, "first": "4.0", "second": null}}],
            "homework": [{"date": "09.03", "status": "+"}, {"date": "16.03", "status": ""}, {
                "date": "23.03",
                "status": ""
            }, {"date": "30.03", "status": "-"}, {"date": "27.04", "status": ""}, {
                "date": "04.05",
                "status": ""
            }, {"date": "11.05", "status": ""}],
            "surname": "Wac",
            "attendances": [{"date": "02.03", "status": "present"}, {
                "date": "09.03",
                "status": "justified"
            }, {"date": "16.03", "status": "present"}, {"date": "23.03", "status": "present"}, {
                "date": "30.03",
                "status": "present"
            }, {"date": "06.04", "status": "justified"}, {"date": "20.04", "status": "present"}, {
                "date": "27.04",
                "status": "absent"
            }, {"date": "04.05", "status": "absent"}, {"date": "11.05", "status": "present"}, {
                "date": "21.05",
                "status": "present"
            }, {"date": "25.05", "status": "present"}]
        }],
        "password": "wsei3B",
        "dateOfActivities": "Czwartek"
    }
];

groups.forEach((group, i) => {
    group.activeYear = "2017/2018";
    group.activeSemester = "1";
    group.semesters = [];
    group.semesters.push({year: "2016/2017", semester: "2", students: group.students});
    let students = [];
    group.students.forEach(s => students.push({
        id: s.id,
        name: s.name,
        surname: s.surname,
        attendances: [],
        homework: [],
        tests: []
    }));
    let newSemester = {year: "2017/2018", semester: "1", students: students};
    group.semesters.push(newSemester);
    fs.writeFile(group._id, JSON.stringify(group), (err) => console.log(err));
});

