process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    console.log("hello");
    process.stdout.write(__filename);
  }
  //process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
