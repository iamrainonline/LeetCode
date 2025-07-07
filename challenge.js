const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

let x = video.stop;

// x();

const Video = {
  title: "a",
  tags: ["1", "2", "3"],
  showTags() {
    this.tags.map(function (tag) {
      console.log(this.name, tag);
    });
  },
};

Video.showTags();
