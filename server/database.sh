function database() {
    clear
    # ON KURULUM İÇİN
    echo -n "PORT[5431] -> "
    read DATABASE_PORT
    export DATABASE_PORT=$DATABASE_PORT
    while true; do
        echo
        echo "1 - Do you want to format the database?"
        echo "2 - Do you want to create tables the database?"
        echo "3 - Do you want to seed the database?"
        echo "0 - Exit"
        echo
        echo -n "Your Choice -> "
        read caseResponse

        case $caseResponse in
            1)
                while true; do
                clear
                echo
                echo -n "Do you want to format the database? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    echo "Database formating..."
                    npm run knex migrate:rollback --all
                    echo "Database formated."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;

            2)
                while true; do
                clear
                echo
                echo -n "Do you want to create tables the database? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    echo "Tables creating..."
                    npm run knex migrate:latest
                    echo "Tables created."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;

            3)
                while true; do
                clear
                echo
                echo -n "Do you want to seed the database? [y/n] -> "
                read response
                if [ "$response" == "y" ]; then
                    echo "Database filling..."
                    npm run knex seed:run
                    echo "Database filled."
                    echo
                    echo
                    break
                    elif [ "$response" == "n" ]; then
                    echo
                    echo
                    break
                fi
                done
            ;;

            0)
                return 0
            ;;

            *)
                clear
                echo
            ;;
        esac
    done
}

while true; do
    clear
    echo
    echo "1 - Databese Configration"
    echo "0 - Exit"
    echo
    echo -n "Your Choice -> "
    read caseResponse

    case $caseResponse in
        1)
            database
        ;;

        0)
            echo "READY"
            exit 0
        ;;

        *)

        ;;
    esac

done


