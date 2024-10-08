#include <iostream>
#include <cstdlib>
#include <cstring>
using namespace std;

int main()
{
    const char *query_string = getenv("QUERY_STRING");
    char usuario[50] = "";
    char contra[50] = "";

    if (query_string != nullptr)
    {
        char *param = strdup(query_string);
        char *token = strtok(param, "&");
        while (token != nullptr)
        {
            sscanf(token, "nuevoUsuario=%49s", usuario);
            sscanf(token, "nuevaContra=%49s", contra);
            token = strtok(nullptr, "&");
        }
        free(param);
    }

    // Ejecutando la creación de usuario...
    // ...

    cout << "Content-Type: text/plain\n\n";
    cout << "Usuario creado correctamente.";

    return 0;
}
