let usuarios = [];
let editIndex = null;

function guardarUsuario() {
  const nombre = document.getElementById("nombre").value.trim();
  const identificacion = document.getElementById("identificacion").value.trim();
  const direccion = document.getElementById("direccion").value.trim();

  if (!nombre || !identificacion || !direccion) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const usuario = { nombre, identificacion, direccion };

  if (editIndex === null) {
    usuarios.push(usuario);
  } else {
    usuarios[editIndex] = usuario;
    editIndex = null;
  }

  document.getElementById("nombre").value = "";
  document.getElementById("identificacion").value = "";
  document.getElementById("direccion").value = "";

  mostrarUsuarios();
}

function mostrarUsuarios() {
  const tbody = document.getElementById("listaUsuarios");
  tbody.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.identificacion}</td>
        <td>${usuario.direccion}</td>
        <td class="acciones">
          <button onclick="editarUsuario(${index})">Editar</button>
          <button class="eliminar" onclick="eliminarUsuario(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

function editarUsuario(index) {
  const usuario = usuarios[index];
  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("identificacion").value = usuario.identificacion;
  document.getElementById("direccion").value = usuario.direccion;
  editIndex = index;
}

function eliminarUsuario(index) {
  if (confirm("¿Estás seguro de eliminar este usuario?")) {
    usuarios.splice(index, 1);
    mostrarUsuarios();
  }
}
