

var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});


describe("this is a tester start", function(){
  it("this is test 1", function(done){
    console.log("going to list the containers")
    docker.listContainers(function (err, containers) {
      console.log("errors are ", err)
      console.log("containers are: ", containers)
      done()
    });
  })
})


