import { useState } from "react";
import { connect } from "react-redux";
import { selectDirectorySection } from "../redux/directory/directory.selectors";
import MenuItem from "./menu-item";

function Directory({ sections }) {

  console.log(sections)

  return (
    <div className="flex flex-wrap">
      {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
        < MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  sections: selectDirectorySection(state),
});

export default connect(mapStateToProps)(Directory);
