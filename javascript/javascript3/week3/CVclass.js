class Job {
            constructor (id,title,description,startDate,endDate){
                this.id = id,
                this.title = title,
                this.description = description,
                this.startDate = startDate,
                this.endDate = endDate
            }
        }

class Education {
    constructor (id,title,school,address,startDate,endDate){
        this.id = id,
        this.title = title,
        this.school = school,
        this.address = address,
        this.startDate = startDate,
        this.endDate = endDate
    }
}

class CV {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        this.email = email
    }

    addJob(job) {
        this.jobs.push(new Job(job.id,job.title,job.description,job.startDate,job.endDate))
    }

    removeJob(job) {
        let indexToDelete = this.jobs.findIndex(jobItem => jobItem.id === job.id)
        console.log('...........',indexToDelete,'æææææææææææ',this.jobs)
        if (indexToDelete != -1){
            this.jobs.splice(indexToDelete,1)
        }else{
            alert(`There is no ${job.title} job to delete`);
        }
    }

    addEducation(education) {
        this.educations.push(new Education(
            education.id,education.title,education.school,education.address,education.startDate,education.endDate))
    }

    removeEducation(education) {
        let indexToDelete = this.educations.findIndex(educationItem => educationItem.id === education.id)
        console.log('...........',indexToDelete,'æææææææææææ',this.jobs)
        if (indexToDelete != -1){
            this.educations.splice(indexToDelete,1)
        }else{
            alert(`There is no ${education.title} education to delete`);
        }
    }

    renderCV(){
        let jobListElem ,educationListElem;
            // jobDescription = `${job.title}: ${job.description} from ${job.startDate} to ${job.endDate}`
        this.jobs.map(job => {
            jobListElem = document.createElement('li');
            jobListElem.innerHTML = `${job.title}: ${job.description} ( ${job.startDate} - ${job.endDate})`;
            // console.log('øøø',jobListElem,this.jobs.indexOf(job));
            // jobListElem.innerHTML(`${job.title}: ${job.description} from ${job.startDate} to ${job.endDate}`);
            document.getElementById('job').appendChild(jobListElem)
            
        })

        this.educations.map(education => {
            educationListElem = document.createElement('li');
            educationListElem.innerHTML = `${education.title}: ${education.school} in ${education.address}
                                             (${education.startDate} - ${education.endDate})`;
            console.log('øøø',educationListElem,this.educations.indexOf(education));
            // jobListElem.innerHTML(`${job.title}: ${job.description} from ${job.startDate} to ${job.endDate}`);
            document.getElementById('education').appendChild(educationListElem)
            
        })
    }
} 

let myCv = new CV ('eng.rufaidajumaa@gmail.com')
let job1 = new Job(1,'Developer','Front-end developer at Kruso','1/1/2018','1/11/2018');
let job2 = new Job(2,'Dev2','Front-end 2','2019','1/11/2019');
let job3 = new Job(3,'Dev3','Front-end 3','1/2/2015','1/11/2015');

let edu1 = new Education(1,'IT','Networking at Damascus University','Damascus','1/2/2009','1/11/2010')
let edu2 = new Education(2,'IT2','Networking at Damascus University2','Damas','2011','2013')
let edu3 = new Education(3,'IT3','Networking at Damascus University3','Damascus','1/2/2004','1/11/2006')
myCv.addEducation(edu1);
myCv.addEducation(edu2);
myCv.addEducation(edu3);
myCv.addJob(job1);
myCv.addJob(job2);
myCv.addJob(job3);
// myCv.removeJob(job2);
// myCv.removeEducation(edu2);
myCv.renderCV();
