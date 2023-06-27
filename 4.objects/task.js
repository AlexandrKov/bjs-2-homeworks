    function Student(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = [];
    }
    
    
    Student.prototype.setSubject = function (subjectName) {
      this.subject = subjectName;
    }
    
    Student.prototype.addMarks = function (...marks) {
      if (this.hasOwnProperty('marks') && this.marks !== []) {
        this.marks.push(...marks);
      } else {
        return 0; 
      }
    }
    
    Student.prototype.getAverage = function () {
      if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
        this.average = 0;
        return this.average;
      } else {
        let sum = 0;
        let count = this.marks.length;
        sum = this.marks.reduce((acc, mark) => acc + mark, 0)
        this.average = sum / count;
        return sum / count;
      }
    }
    
    Student.prototype.exclude = function (reason) {
        this.excluded = reason;
        delete this.subject;
        delete this.marks;
      }
