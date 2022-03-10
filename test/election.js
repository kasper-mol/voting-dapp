var Election = artifacts.require("./Election.sol")

contract(" Election", function(accounts) {

    it("init with two candidates", function () {
        return Election.deployed().then(function(i) {
            return i.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2)
        })
    })

    it("init candidates with correct values", function () {
        return Election.deployed().then(function(i) {
            electionInstance = i;
            return electionInstance.candidates(1)
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, " contains correct id");
            assert.equal(candidate[1], "Candidate 1", " contains correct name");
            assert.equal(candidate[2], 0, " contains correct vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, " contains correct id");
            assert.equal(candidate[1], "Candidate 2", " contains correct name");
            assert.equal(candidate[2], 0, " contains correct vote count");
            return electionInstance.candidates(2);
        })
    })
})
