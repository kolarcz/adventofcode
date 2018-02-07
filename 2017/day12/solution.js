function getWhereProgramsAre(groups, programs) {
  const inGroups = new Set();

  groups.forEach((group) => {
    for (const program of programs) {
      if (group.has(program)) {
        inGroups.add(group);
        break;
      }
    }
  });

  return inGroups;
}

function mergeGroupsToFirst(groups, mergingGroups) {
  let first;

  mergingGroups.forEach((group) => {
    if (!first) {
      first = group;
    } else {
      group.forEach(program => first.add(program));
      groups.delete(group);
    }
  });
}

function findGroups(input) {
  const groups = new Set();

  const rows = input.split(/[\r\n]+/);
  rows.forEach((row) => {
    const [, first, seconds] = row.match(/^(\d+) <-> ((\d+, )*\d+)$/);
    const programs = [first].concat(seconds.split(', '));
    groups.add(new Set(programs));

    const inGroups = getWhereProgramsAre(groups, programs);
    if (inGroups.size > 1) {
      mergeGroupsToFirst(groups, inGroups);
    }
  });

  return groups;
}

exports.part1 = (input) => {
  const groups = findGroups(input);

  let group;
  for (group of groups) {
    if (group.has('0')) break;
  }

  return group.size;
};

exports.part2 = (input) => {
  const groups = findGroups(input);
  return groups.size;
};
